from .models import Style, Medium, Artist
from .serializers import ArtistSerializer
from artists_collective.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions


class ArtistList(generics.ListAPIView):
    """ List of artists' posts """
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()


class ArtistDetail(generics.RetrieveUpdateAPIView):
    """ Artists can edit their profiles """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all().order_by('-created_at')
