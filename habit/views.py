from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Habit
from .serializers import HabitSerializer
from drf_api.permissions import IsOwnerOnly

class HabitList(generics.ListCreateAPIView):
    serializer_class = HabitSerializer
    queryset = Habit.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOnly]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
    def get_queryset(self):
        return Habit.objects.filter(owner=self.request.user)

class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HabitSerializer
    queryset = Habit.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOnly]