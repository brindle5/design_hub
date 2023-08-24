from django.urls import path
from artists import views


urlpatterns = [
    path('artists/', views.ArtistList.as_view()),
]
