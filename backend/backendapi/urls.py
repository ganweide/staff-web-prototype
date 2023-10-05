from django.urls import path, include
from .views import CustomerTableView, BranchTableView
from rest_framework import routers

route1 = routers.DefaultRouter()
route1.register("", CustomerTableView, basename='customerTableView')

route2 = routers.DefaultRouter()
route2.register("", BranchTableView, basename='branchTableView')

urlpatterns = [
  path('customer/', include(route1.urls)),
  path('branch/', include(route2.urls)),
]

