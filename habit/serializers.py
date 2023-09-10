from rest_framework import serializers
from .models import Habit

class HabitSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Habit
        fields = ['id', 'owner', 'created_at', 'title',
                  'description', 'completed', 'frequency']
        
        read_only_fields = ['owner']