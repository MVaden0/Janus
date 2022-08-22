from django.contrib import admin

from .models import Item


class ProductAdminInline(admin.TabularInline):
    model = Item.parts.through
    fk_name = 'product'

class PartAdminInline(admin.TabularInline):
    model = Item.parts.through
    fk_name = 'part'


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    model = Item

    inlines = [
        ProductAdminInline,
        PartAdminInline
    ]

    list_display = [
        'name',
        'for_sale',
        'price'
    ]

    list_filter = [
        'name',
        'for_sale',
        'price'
    ]
    
    fieldsets = [
        [
            None, 
            {
                'fields': 
                [
                    'name',
                    'for_sale',
                    'price'
                ]
            }
        ]
    ]

    add_fieldsets = [
        [
            None, 
            {
                'classes': 
                [
                    'wide'
                ],
                'fields': 
                [
                    'name',
                    'for_sale',
                    'price'
                ]
            }
        ]
    ]
