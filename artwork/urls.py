from django.urls import path
from artwork import views


urlpatterns = [
    path('', views.ArtworkList.as_view()),
    path('<int:pk>', views.ArtworkDetail.as_view()),
]
