from django.db import models

# Create your models here.

class User(models.Model):
    password = models.CharField(max_length=200)
    email = models.EmailField(default="")
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    full_name = models.CharField(max_length=200)
    date_cr = models.DateField(auto_now_add=True)
    total_score = models.IntegerField(default=0)
    profile_picture = models.ImageField(upload_to="images/")
    status = models.CharField(max_length=30)

    def __str__(self):
        return str(self.id) + ' ' + self.username + ' ' + self.full_name + ' ' + self.status + ' ' + str(self.date_cr)
    
class Matches(models.Model):
    id = models.AutoField(primary_key=True)
    match_mode = models.CharField(max_length=200)
    first_p_id = models.IntegerField(default=0)
    second_p_id = models.IntegerField(default=0)
    # first_p_res = models.IntegerField(default=0)
    # second_p_res = models.IntegerField(default=0)
    # match_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.id) + ' ' + self.match_mode + ' ' + str(self.first_p_id) + str(self.second_p_id)