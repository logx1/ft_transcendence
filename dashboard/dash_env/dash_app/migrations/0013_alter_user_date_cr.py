# Generated by Django 4.2.16 on 2024-09-10 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_app', '0012_remove_user_uid_remove_user_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_cr',
            field=models.DateField(auto_now_add=True),
        ),
    ]