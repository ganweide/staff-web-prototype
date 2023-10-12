from django.urls import path, include
from .views import CustomerTableView, BranchTableView, ProductTableView, VoucherTableView
from rest_framework import routers

route1 = routers.DefaultRouter()
route1.register("", CustomerTableView, basename='customerTableView')

route2 = routers.DefaultRouter()
route2.register("", BranchTableView, basename='branchTableView')

route3 = routers.DefaultRouter()
route3.register("", ProductTableView, basename='productTableView')

route4 = routers.DefaultRouter()
route4.register("", VoucherTableView, basename='voucherTableView')

urlpatterns = [
  path('customer/', include(route1.urls)),
  path('branch/', include(route2.urls)),
  path('product/', include(route3.urls)),
  path('voucher/', include(route4.urls)),
]

