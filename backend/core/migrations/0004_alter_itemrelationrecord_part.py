# Generated by Django 4.1 on 2022-08-22 04:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_remove_itemrelationrecord_product_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemrelationrecord',
            name='part',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='part', to='core.item'),
        ),
    ]
