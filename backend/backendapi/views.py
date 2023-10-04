from django.shortcuts import render
from rest_framework import viewsets, status
from .models import CustomerTable
from .serializers import CustomerTableSerializer
from rest_framework.response import Response

class CustomerTableView(viewsets.ModelViewSet):
    queryset = CustomerTable.objects.all().order_by('-created_at')
    serializer_class = CustomerTableSerializer
    #all
    def list(self, request):
        queryset = CustomerTable.objects.all().order_by('-created_at')
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = CustomerTableSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = CustomerTableSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CustomerTableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
