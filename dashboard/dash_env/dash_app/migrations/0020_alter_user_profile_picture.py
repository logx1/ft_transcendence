# Generated by Django 4.2.16 on 2024-09-13 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0019_alter_user_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
