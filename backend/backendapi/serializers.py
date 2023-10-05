from rest_framework import serializers
from .models import CustomerTable, BranchTable

class CustomerTableSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomerTable
    fields = [
      'customerId',
      'firstName',
      'lastName',
      'gender',
      'phone',
      'email',
      'cardNumber',
      'birthday',
      'memberExpiry',
      'address1',
      'address2',
      'address3',
      'city',
      'state',
      'ZIP',
      'rewardsPoint',
      'credit',
      'discount',
      'pricingLevel',
      'group',
      'notes',
    ]

class BranchTableSerializer(serializers.ModelSerializer):
  class Meta:
    model = BranchTable
    fields = [
      'id',
      'name',
      'phone',
      'email',
      'address1',
      'address2',
      'address3',
      'city',
      'state',
      'ZIP',
      'category',
      'products',
    ]