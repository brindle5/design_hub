from django.contrib import admin
from .models import Style, Medium, ArtistWork, Artist


admin.site.register(Style)
admin.site.register(Medium)
# admin.site.register(ArtistWork)
admin.site.register(Artist)
