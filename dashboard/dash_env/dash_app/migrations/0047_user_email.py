# Generated by Django 4.2.16 on 2024-09-21 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0046_remove_user_email_alter_user_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]