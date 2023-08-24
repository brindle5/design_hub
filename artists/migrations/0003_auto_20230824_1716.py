# Generated by Django 3.2.20 on 2023-08-24 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0002_artwork_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='artwork',
            name='art_image_name',
        ),
        migrations.AlterField(
            model_name='artwork',
            name='name',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Artwork name'),
        ),
    ]
