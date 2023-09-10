from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .models import Habit
from .serializers import HabitSerializer
from drf_api.permissions import IsOwnerOnly

class HabitList(generics.ListCreateAPIView):
    serializer_class = HabitSerializer
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['frequency']
    ordering_fields = ['frequency', 'created_at']
    permission_classes = [IsAuthenticated, IsOwnerOnly]
    
    def get_queryset(self):
        queryset = Habit.objects.filter(owner=self.request.user)
        frequency = self.request.query_params.get('frequency', None)
        if frequency:
            queryset = queryset.filter(frequency=frequency)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HabitSerializer
    queryset = Habit.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOnly]