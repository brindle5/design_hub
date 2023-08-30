from rest_framework import serializers
from .models import Artwork


class ArtworkSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Artwork
        fields = [
            'id',
            'owner',
            'name',
            'art_image',
            'alt_text',
            'actual_date_of_creation',
            'added_date',
            'edited_date',
            'is_owner',
        ]
