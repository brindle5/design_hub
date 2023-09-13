from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    # Serializer for Comment model
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    artist_id = serializers.ReadOnlyField(source='owner.artist.id')
    profile_image = serializers.ReadOnlyField(source='owner.artist.image.url')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Comment
        fields = [
            'id',
            'owner',
            'is_owner',
            'profile_id',
            'profile_image',
            'artwork',
            'created_at',
            'updated_at',
            'content',
        ]


class CommentDetailSerializer(CommentSerializer):
    # Serializer for comment detail view
    artwork = serializers.ReadOnlyField(source='artwork.id')
