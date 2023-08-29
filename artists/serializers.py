from rest_framework import serializers
from .models import Style, Medium, Artist, Artwork


class ArtworkSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    # is_owner = serializers.SerializerMethodField()

    # def get_is_owner(self, obj):
    #     request = self.context['request']
    #     return request.user == obj.owner

    class Meta:
        model = Artwork
        fields = [
            'id',
            'owner',
            'name',
            'artist',
            'art_image',
            'alt_text',
            'actual_date_of_creation',
            'added_date',
            'edited_date',
            # 'is_owner',
        ]


class ArtistSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

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
