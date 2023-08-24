from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Style, Medium, Artist, Artwork
from .serializers import ArtistSerializer


class ArtistList(APIView):
    def get(self, request):
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data)
