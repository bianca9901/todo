from django.urls import path
from task import views

urlpatterns = [
    path('tasks/', views.TaskList.as_view()),
    path('task/<int:pk>/', views.TaskDetail.as_view()),
    path('notes/', views.NoteList.as_view()),
    path('note/<int:pk>/', views.NoteDetail.as_view()),
]
