from django.db import models

# Create your models here.

class User(models.Model):
    password = models.CharField(max_length=200, default="aa")
    username = models.CharField(max_length=200, unique=True)
    full_name = models.CharField(max_length=200)
    date_cr = models.DateField(auto_now_add=True)
    total_score = models.IntegerField(default=0)
    profile_picture = models.ImageField(upload_to="images/", default="images/dino.png")
    status = models.CharField(max_length=30, default="Hello! I'm new here!")
    user_result = models.IntegerField(default=0)
    # email = models.EmailField(default="")

    def __str__(self):
        return self.username + ' ' + self.full_name + ' ' + self.status + ' ' + str(self.date_cr) + ' ' + str(self.user_result)

# class Matches(models.Model):
#     game_mode = models.CharField(max_length=200)
#     f_person_user = models.CharField(max_length=200)
#     sec_person_user = models.CharField(max_length=200)
#     f_person_result = models.IntegerField(default=0)
#     sec_person_result = models.IntegerField(default=0)
#     match_date = models.TimeField(auto_now=True)

#     def __str__(self):
#         return str(self.id) + ' ' + str(self.first_p_id) + ' ' + str(self.second_p_id)