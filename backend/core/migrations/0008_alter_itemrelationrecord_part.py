# Generated by Django 4.1 on 2022-08-22 20:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_remove_itemrelationrecord_product_part_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemrelationrecord',
            name='part',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, related_name='%(class)s_part', to='core.item'),
            preserve_default=False,
        ),
    ]
