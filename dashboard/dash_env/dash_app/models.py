from django.db import models
from django.utils import timezone

# Create your models here.

class User(models.Model):
    # UID = models.UUIDField(default=uuid.uuid4,
    #                        editable=False,
    #                        unique=True)
    password = models.CharField(max_length=200, default="")
    email = models.EmailField(default="")
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    full_name = models.CharField(max_length=200)
    date_cr = models.DateField(auto_now_add=True)
    total_score = models.IntegerField(default=0)
    profile_picture = models.ImageField()
    status = models.CharField(max_length=30)

    def __str__(self):
        return str(self.id) + ' ' + self.username + ' ' + self.full_name + ' ' + self.status + ' ' + str(self.date_cr)
