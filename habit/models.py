from django.db import models
from django.contrib.auth.models import User

class Habit(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    

    FREQUENCY_CHOICES = [
        ('daily', 'Every day'),
        ('every_3rd_day', 'Every 3rd Day'),
        ('once_a_week', 'Once A Week')
    ]
    frequency = models.CharField(max_length=15, choices=FREQUENCY_CHOICES)
    
    def __str__(self):
        return self.title