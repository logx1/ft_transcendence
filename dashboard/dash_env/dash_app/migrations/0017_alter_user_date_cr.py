# Generated by Django 4.2.16 on 2024-09-11 18:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0016_user_email_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_cr',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]