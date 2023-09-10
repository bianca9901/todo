from django.urls import path
from habit import views

urlpatterns = [
    path('habits/', views.HabitList.as_view()),
    path('habit/<int:pk>/', views.HabitDetail.as_view()),
]
