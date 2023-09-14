from .models import Artwork
from .serializers import ArtworkSerializer
from artists_collective.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions, filters
from django.core import exceptions
from django.db.models import Count


class ArtworkList(generics.ListCreateAPIView):
    """ View to see a list of artwork pieces """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtworkSerializer
    queryset = Artwork.objects.annotate(
        comments_count=Count('comment', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
    search_fields = [
        'owner__username',
        'title',
    ]
    ordering_fields = [
        'comments_count',
    ]

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)
        else:
            raise exceptions.PermissionDenied


class ArtworkDetail(generics.RetrieveUpdateDestroyAPIView):
    """ Artists can edit or delete their pieces """
    serializer_class = ArtworkSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Artwork.objects.annotate(
        comments_count=Count('comment', distinct=True)
    ).order_by('-created_at')
