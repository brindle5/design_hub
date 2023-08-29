from .models import Artwork
from .serializers import ArtworkSerializer
from artists_collective.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions


class ArtworkList(generics.ListCreateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtworkSerializer
    queryset = Artwork.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ArtworkDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArtworkSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Artwork.objects.all()
