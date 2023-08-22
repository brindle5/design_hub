from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Style(models.Model):
    # A model for artists to select their art style e.g. abstract, art deco, impressionism etc  # noqa
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class Medium(models.Model):
    # A model for artists to select their art medium e.g. pottery, oil, sculpture etc  # noqa
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class ArtistWork(models.Model):
    # A model for artists to show their work
    name = models.CharField(max_length=150, null=False, blank=False)
    art_image1 = models.ImageField(
        upload_to='images/', default='../default_post_vnjiii'
    )
    art_image2 = models.ImageField(
        upload_to='images/', default='../default_post_vnjiii'
    )
    art_image3 = models.ImageField(
        upload_to='images/', default='../default_post_vnjiii'
    )

    def __str__(self):
        return self.name


class Artist(models.Model):
    # A model for artists to promote themselves on the design hub site
    owner = models.OneToOneField(User, on_delete=models.CASCADE)    
    profile_image = models.ImageField(
        upload_to='images/', default='../default_profile_qpd7ju'
    )
    location = models.CharField(max_length=255, null=True, blank=True)
    influences = models.TextField(null=True, blank=True)
    medium = models.ForeignKey(
        Medium, on_delete=models.CASCADE, null=True, blank=True
    )
    style = models.ForeignKey(
        Style, on_delete=models.CASCADE, null=True, blank=True
    )
    artistwork = models.ForeignKey(
        ArtistWork, on_delete=models.CASCADE, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


def create_artist(sender, instance, created, **kwargs):
    if created:
        Artist.objects.create(owner=instance)


post_save.connect(create_artist, sender=User)
