# Generated by Django 4.2.16 on 2024-09-21 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0044_delete_matches_alter_user_id_alter_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(default='images/dino.png', upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='user',
            name='status',
            field=models.CharField(default="Hello! I'm new here!", max_length=30),
        ),
    ]
