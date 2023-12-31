from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


class Style(models.Model):
    """A model for artists to select their art style
        e.g. abstract, art deco, impressionism etc
    """
    name = models.CharField(
        max_length=100,
        null=True,
        blank=True
        )

    def __str__(self):
        return self.name


class Medium(models.Model):
    """ A model for artists to select their art medium
        e.g. pottery, oil, sculpture etc
    """
    name = models.CharField(
        max_length=100,
        null=True,
        blank=True
        )

    def __str__(self):
        return self.name


class Artist(models.Model):
    """ A model for artists to promote themselves on the design hub site """
    owner = models.OneToOneField(
        User,
        on_delete=models.CASCADE
        )
    profile_image = CloudinaryField(
        'profile_image',
        folder='profile_image',
        null=True,
        blank=True,
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
    medium = models.ManyToManyField(
        Medium,
        blank=True
    )
    style = models.ManyToManyField(
        Style,
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

    @property
    def image_url(self):
        if self.profile_image:
            return self.profile_image.url
        return '../static/images/default_profile_picture.jpg'


def create_artist(sender, instance, created, **kwargs):
    if created:
        Artist.objects.create(owner=instance)


post_save.connect(create_artist, sender=User)
