# Generated by Django 3.2.20 on 2023-08-24 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='artwork',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]