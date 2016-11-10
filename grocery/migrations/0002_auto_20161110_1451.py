# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groceryitem',
            name='price',
            field=models.DecimalField(default=1, max_digits=10, decimal_places=2),
        ),
        migrations.AlterField(
            model_name='groceryitem',
            name='quantity',
            field=models.DecimalField(default=1, max_digits=10, decimal_places=2),
        ),
    ]
