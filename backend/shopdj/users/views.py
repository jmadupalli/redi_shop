from datetime import datetime

from django.contrib.auth.signals import user_logged_out
from django.contrib.auth import login, get_user_model

from rest_framework import permissions, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from knox.views import LoginView as KnoxLoginView

from .serializers import UserSerializer, LoginSerializer

from django.conf import settings


class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        response = super(LoginView, self).post(request, format=None)

        token = response.data['token']
        response.data['expiry'] = datetime.timestamp(
            response.data['expiry']) * 1000
        response.set_cookie(
            'auth_token',
            settings.REST_KNOX['AUTH_HEADER_PREFIX']+' '+token,
            httponly=True,
        )
        del response.data['token']
        return response


class CreateUserView(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    model = get_user_model()
    serializer_class = UserSerializer


class LogoutView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        request._auth.delete()
        user_logged_out.send(sender=request.user.__class__,
                             request=request, user=request.user)
        response = Response(None, status=status.HTTP_204_NO_CONTENT)
        response.delete_cookie('auth_token')
        return response


class LogoutAllView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        request.user.auth_token_set.all().delete()
        user_logged_out.send(sender=request.user.__class__,
                             request=request, user=request.user)
        return Response(None, status=status.HTTP_204_NO_CONTENT)


class ListUsersView(generics.ListAPIView):
    queryset = get_user_model().objects.filter(staff=False)
    permission_classes = [permissions.IsAdminUser]
    serializer_class = UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):

        self.permission_classes = (permissions.IsAuthenticated,)
        return super(UserViewSet, self).get_permissions()

    def list(self, request):
        return Response()


class TestView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        return Response({
            'foo': 'bar'
        })
