from rest_framework import permissions


class IsOwnerOnly(permissions.BasePermission):
    """
    Custom permission that checks whether the requesting user is the owner
    of the object being accessed. This permission allows the owner to perform
    read and write operations on the object while denying access to others.
    """
    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user
