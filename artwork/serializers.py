from rest_framework import serializers
from .models import Artwork
from django.contrib.humanize.templatetags.humanize import naturalday


class ArtworkSerializer(serializers.ModelSerializer):
    """ Serializer for Artwork model """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    added_date = serializers.SerializerMethodField()
    edited_date = serializers.SerializerMethodField()
    comments_count = serializers.ReadOnlyField()

    def validate_image(self, value):
        """ Validate image code taken from CI's DRF project"""
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_added_date(self, obj):
        return naturalday(obj.added_date)

    def get_edited_date(self, obj):
        return naturalday(obj.edited_date)

    class Meta:
        model = Artwork
        fields = [
            'id',
            'owner',
            'title',
            'art_image',
            'alt_text',
            'actual_date_of_creation',
            'added_date',
            'edited_date',
            'is_owner',
            'comments_count',
        ]
