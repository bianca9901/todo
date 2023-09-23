from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .models import Task, Note
from .serializers import TaskSerializer, NoteSerializer
from drf_api.permissions import IsOwnerOnly

class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    filter_backends = [
        filters.OrderingFilter,
        DjangoFilterBackend,
        filters.SearchFilter,
    ]
    search_fields = [
        'title',
        'description',
    ]
    filterset_fields = ['priority']
    ordering_fields = ['priority', 'created_at', 'due_date']
    permission_classes = [IsAuthenticated, IsOwnerOnly]
    
    def get_queryset(self):
        queryset = Task.objects.filter(owner=self.request.user)
        priority = self.request.query_params.get('priority', None)
        if priority:
            queryset = queryset.filter(priority=priority)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOnly]
    
class NoteList(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated, IsOwnerOnly]
    
    def get_queryset(self):
        queryset = Note.objects.filter(owner=self.request.user)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
class NoteDetail(generics.RetrieveDestroyAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOnly]