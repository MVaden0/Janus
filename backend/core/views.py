import json

from django.http import JsonResponse
from .models import Item


def items(request):
    """
    Returns a serialized json response of all items in the database.
    """

    data = {
        'data': []
    }

    for _item in Item.objects.all():
        _item_data = {
            'name': _item.name,
            'for_sale': _item.for_sale,
            'price': _item.price,
            'parts': []
        }

        for _part in _item.parts:
            _part_data = {
                'product': _part.product.name,
                'part': _part.part.name,
                'amount': _part.amount
            }

            _item_data['parts'].append(_part_data)

        data['data'].append(_item_data)

    return JsonResponse(json.loads(data))
