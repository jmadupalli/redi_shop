from django.shortcuts import render
from rest_framework import views, permissions

# Create your views here.

class CreateProductView(views.APIView):
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request, format=None):
        return Response({
            'foo': 'bar'
        })
    
    def post(self, request, format=None):
        print(request.user)
        return None