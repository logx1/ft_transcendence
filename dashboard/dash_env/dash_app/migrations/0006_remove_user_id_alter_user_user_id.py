# Generated by Django 4.2.16 on 2024-09-07 11:54

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0005_user_user_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AlterField(
            model_name='user',
            name='user_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]