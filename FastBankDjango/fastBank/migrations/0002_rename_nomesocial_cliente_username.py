# Generated by Django 4.2 on 2023-05-12 17:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fastBank', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cliente',
            old_name='nomeSocial',
            new_name='username',
        ),
    ]
