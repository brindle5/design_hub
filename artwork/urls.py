from django.urls import path
from artwork import views


urlpatterns = [
    path('artwork/', views.ArtworkList.as_view()),
    path('artwork/<int:pk>', views.ArtworkDetail.as_view()),
]
