from rest_framework import serializers
from .models import Style, Medium, Artist
from django.contrib.humanize.templatetags.humanize import naturalday


class ArtistSerializer(serializers.ModelSerializer):
    """ Serializer for artist model """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_created_at(self, obj):
        return naturalday(obj.created_at)

    def get_updated_at(self, obj):
        return naturalday(obj.updated_at)

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
            'is_owner',
        ]
