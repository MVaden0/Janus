from django.http import HttpResponse
from django.views import View

from .models import Item
from.utils import encodeJSON


class Items(View):
    def get(self, request):
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

            for _part in _item.parts.all():
                _part_data = {
                    'product': _part.product.name,
                    'part': _part.part.name,
                    'amount': _part.amount
                }

                _item_data['parts'].append(_part_data)

            data['data'].append(_item_data)

        return HttpResponse(encodeJSON(data))

    def post(self, request):
        pass

    def patch(self, request):
        pass

    def delete(self, request):
        pass

