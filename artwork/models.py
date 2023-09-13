from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User


class Artwork(models.Model):
    """ A model for artists to show their work """
    title = models.CharField(
        max_length=250,
        null=True,
        blank=True,
        verbose_name='Artwork title'
        )
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    art_image = CloudinaryField(
        'art image',
        folder='art images',
        null=True,
        blank=True
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
        if self.art_image:
            return self.art_image.url
        return '../static/images/default_artwork.jpg'
