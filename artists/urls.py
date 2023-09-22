from django.urls import path
from artists import views


urlpatterns = [
    path('', views.ArtistList.as_view()),
    path('<int:pk>', views.ArtistDetail.as_view()),
]
