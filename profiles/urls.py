from django.urls import path
from . import views

urlpatterns = [
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),
]