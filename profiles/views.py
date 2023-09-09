from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Profile
from .serializers import ProfileSerializer
from drf_api.permissions import IsOwnerOnly
from rest_framework import permissions

class ProfileDetail(generics.RetrieveUpdateAPIView):
    """ Retrieve & Update a user's profile.
    This allows a user to perform these operations on their
    own profile. Note, this makes users private and not visible
    to other users. Will update these permissions if I have time to 
    make user2user interactions a feauture.
    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = [IsOwnerOnly, IsAuthenticated]
