# Generated by Django 4.2.16 on 2024-09-07 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0006_remove_user_id_alter_user_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='user_id',
            new_name='UID',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]