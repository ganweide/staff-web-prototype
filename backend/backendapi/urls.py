from django.urls import path, include
from .views import CustomerTableView
from rest_framework import routers

route1 = routers.DefaultRouter()
route1.register("", CustomerTableView, basename='customerTableView')

urlpatterns = [
    path('customer/', include(route1.urls)),
]

