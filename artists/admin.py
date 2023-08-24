from django.contrib import admin
from .models import Style, Medium, Artist, Artwork


admin.site.register(Style)
admin.site.register(Medium)
admin.site.register(Artist)
admin.site.register(Artwork)