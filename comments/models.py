from django.db import models
from django.contrib.auth.models import User
from artwork.models import Artwork


class Comment:
    # A model for artists to comment on other artists' pieces
    owner = models.ForeignKey(
        User, 
        on_delete=models.CASCADE
        )
    Artwork = models.ForeignKey(
        Artwork, 
        on_delete=models.CASCADE
        )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
