from rest_framework import serializers
from .models import Artwork
from django.contrib.humanize.templatetags.humanize import naturalday


class ArtworkSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    added_date = serializers.SerializerMethodField()
    edited_date = serializers.SerializerMethodField()

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
        ]
