from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Profile
from .serializers import ProfileSerializer
from drf_api.permissions import IsOwnerOnly
from rest_framework import permissions

class ProfileDetail(generics.RetrieveUpdateAPIView):
    """Retrieve user's profile.
    This view allows users to view their profile, including their username and
    account registration date. User profile updates are not a feature due
    to time constraints. Note, users accounts are private and not visible to
    other users. These permissions will be updated in the future to support
    user-to-user interactions.
    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = [IsOwnerOnly, IsAuthenticated]
