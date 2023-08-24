from rest_framework import serializers
from .models import Style, Medium, Artist, Artwork


class ArtistSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.artist')

    class Meta:
        model = Artist
        fields = [
            'id',
            'owner',
            'profile_image',
            'location',
            'influences',
            'medium',
            'style',
            'created_at',
            'updated_at',
        ]
