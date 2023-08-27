from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Style, Medium, Artist, Artwork
from .serializers import ArtistSerializer, ArtworkSerializer
from artists_collective.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions


class ArtworkList(generics.ListCreateAPIView):
    serializer_class = ArtworkSerializer
    queryset = Artwork.objects.all()



# class ArtistList(APIView):
#     def get(self, request):
#         artists = Artist.objects.all()
#         serializer = ArtistSerializer(
#             artists, many=True, context={'request': request}
#         )
#         return Response(serializer.data)


class ArtistList(generics.ListAPIView):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()


class ArtistDetail(APIView):
    serializer_class = ArtistSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        try:
            artist = Artist.objects.get(pk=pk)
            self.check_object_permissions(self.request, artist)
            return artist
        except Artist.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        artist = self.get_object(pk)
        serializer = ArtistSerializer(
            artist, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        artist = self.get_object(pk)
        serializer = ArtistSerializer(
            artist, data=request.data, context={'request': request}
            )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
