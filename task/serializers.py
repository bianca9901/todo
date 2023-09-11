from rest_framework import serializers
from .models import Task
from django.contrib.humanize.templatetags.humanize import naturaltime

class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    due_date_formatted = serializers.SerializerMethodField()
    due_date_natural = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    
    def get_created_at(self, obj):
        return naturaltime(obj.created_at)
    
    def get_due_date_natural(self, obj):
        return naturaltime(obj.due_date)
    
    def get_due_date_formatted(self, obj):
        return obj.due_date.strftime('%d %b %Y %H:%M')
    class Meta:
        model = Task
        fields = ['id', 'owner', 'created_at', 'updated_at', 'title',
                  'description', 'due_date_formatted', 'due_date_natural', 'completed', 'priority',
                  'category',]
        
        read_only_fields = ['owner']
        