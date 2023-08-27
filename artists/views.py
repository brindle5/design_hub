from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Style, Medium, Artist, Artwork
from .serializers import ArtistSerializer


class ArtistList(APIView):
    def get(self, request):
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data)


class ArtistDetail(APIView):
    serializer_class = ArtistSerializer

    def get_object(self, pk):
        try:
            artist = Artist.objects.get(pk=pk)
            return artist
        except Artist.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        artist = self.get_object(pk)
        serializer = ArtistSerializer(artist)
        return Response(serializer.data)

    def put(self, request, pk):
        artist = self.get_object(pk)
        serializer = ArtistSerializer(artist, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
