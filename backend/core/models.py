from decimal import Decimal
from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=255)
    parts = models.ManyToManyField('self', through='ItemRelationRecord')
    for_sale = models.BooleanField(default=True)
    price = models.DecimalField(
        max_digits=8, 
        decimal_places=2, 
        default=Decimal('000000.00')
    )

    class Meta:
        verbose_name = 'item'
        verbose_name_plural = 'items'

    def __str__(self) -> str:
        return self.name 


class ItemRelationRecord(models.Model):
    product = models.ForeignKey(
        Item, 
        on_delete=models.PROTECT, 
        related_name='%(class)s_product'
    )
    part = models.ForeignKey(
        Item, 
        on_delete=models.PROTECT, 
        related_name='%(class)s_part'
    )
    amount = models.DecimalField(
        max_digits=7, 
        decimal_places=2, 
        default=Decimal('00000.00')
    )