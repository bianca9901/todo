from rest_framework import serializers
from .models import Task, Note


class TaskSerializer(serializers.ModelSerializer):
    """ Serializer for the Task model.

    Attributes:
    owner (ReadOnlyField): the owners username.
    is_owner(SerializerMethodField): Indicated whether the requesting user
    is the owner."""
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Task
        fields = ['id', 'owner', 'is_owner', 'created_at', 'updated_at',
                        'title', 'description', 'due_date', 'completed',
                        'priority', ]

        read_only_fields = ['owner']


class NoteSerializer(serializers.ModelSerializer):
    """ Serializer for the Note model.

    Attributes:
    owner (ReadOnlyField): the owners username.
    is_owner(SerializerMethodField): Indicated whether the requesting user
    is the owner."""
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Note
        fields = ['id', 'owner', 'content', 'created_at', 'is_owner']
