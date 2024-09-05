from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=200)
    full_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.username + ' ' + self.full_name + ' ' + self.email