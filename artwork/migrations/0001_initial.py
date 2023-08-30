# Generated by Django 3.2.20 on 2023-08-29 09:44

import cloudinary.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Artwork',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=250, null=True, verbose_name='Artwork name')),
                ('art_image', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='art image')),
                ('alt_text', models.CharField(blank=True, max_length=250, null=True, verbose_name='Alt text')),
                ('actual_date_of_creation', models.DateTimeField(blank=True, null=True, verbose_name='Created on:')),
                ('added_date', models.DateTimeField(auto_now_add=True, verbose_name='Added on:')),
                ('edited_date', models.DateTimeField(auto_now_add=True, verbose_name='Edited on:')),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Artwork',
            },
        ),
    ]