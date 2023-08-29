from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Style, Medium, Artist, Artwork
from .serializers import ArtistSerializer, ArtworkSerializer
from artists_collective.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions


class ArtworkList(generics.ListCreateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtworkSerializer
    queryset = Artwork.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# class ArtworkDetail(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ArtworkSerializer
#     permission_classes = [IsOwnerOrReadOnly]
#     queryset = Artwork.objects.all()


class ArtistList(generics.ListAPIView):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()


class ArtistDetail(generics.RetrieveUpdateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all().order_by('-created_at')
