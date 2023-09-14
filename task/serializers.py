from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = Task
        fields = ['id', 'owner', 'created_at', 'updated_at', 'title',
                  'description', 'due_date', 'completed', 'priority',
                  'category',]
        
        read_only_fields = ['owner']
        