from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('items/', Items.as_view())
]
