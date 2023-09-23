from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
class Task(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    due_date = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField(default=False)
    priority = models.CharField(
        max_length=10,
        choices=[("Low", "Low"), ("Medium", "Medium"), ("High", "High")],
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title

class Note(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Note by {self.owner.username}"