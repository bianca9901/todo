from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Profile(models.Model):
    # Represents the profile associated with the user
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


def create_profile(sender, instance, created, **kwargs):
    """ Signal handler function to create a profile instance for a new user
    This function is called when a new user instance is created. It
    automatically creates a corresponding profile instance for the user."""
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
# Connects the signal handler to the user models post_save signal
