from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


class Style(models.Model):
    # A model for artists to select their art style e.g. abstract, art deco, impressionism etc  # noqa
    name = models.CharField(
        max_length=100,
        null=True,
        blank=True
        )

    def __str__(self):
        return self.name


class Medium(models.Model):
    # A model for artists to select their art medium e.g. pottery, oil, sculpture etc  # noqa
    name = models.CharField(
        max_length=100,
        null=True,
        blank=True
        )

    def __str__(self):
        return self.name


class Artwork(models.Model):
    # A model for artists to show their work
    artist = models.ForeignKey(
        Artist,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    art_image = models.ImageField(
        upload_to='images/',
        default='../default_artwork_gko8de'
    )
    art_image_name = models.CharField(
        max_length=250,
        null=True,
        blank=True,
        verbose_name='Artwork name'
        )
    alt_text = models.CharField(
        max_length=250,
        null=True,
        blank=True,
        verbose_name='Alt text'
        )
    actual_date_of_creation = models.DateTimeField(
        null=True,
        blank=True,
        verbose_name='Created on:'
        )
    added_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Added on:'
        )
    edited_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Edited on:')

    class Meta:
        verbose_name = 'Artwork'

    def __str__(self):
        return self.name

    @property
    def image_url(self):
        if self.image:
            return self.image.url
        return 'static/images/default_profile_picture_kodvuc'


class Artist(models.Model):
    # A model for artists to promote themselves on the design hub site
    owner = models.OneToOneField(
        User,
        on_delete=models.CASCADE
        )
    profile_image = models.ImageField(
        upload_to='images/',
        default='../default_profile_qpd7ju'
    )
    location = models.CharField(
        max_length=255,
        null=True,
        blank=True
        )
    influences = models.TextField(
        null=True,
        blank=True
        )
    medium = models.ManyToMany(
        Medium,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    style = models.ManyToMany(
        Style,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Created on:'
        )
    updated_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Edited on:'
        )

    class Meta:
        verbose_name = 'Artist',
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


def create_artist(sender, instance, created, **kwargs):
    if created:
        Artist.objects.create(owner=instance)


post_save.connect(create_artist, sender=User)
