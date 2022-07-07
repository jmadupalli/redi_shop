from django.urls import path

from .views import LoginView, LogoutView, LogoutAllView, CreateUserView, ListUsersView


urlpatterns = [
    path('login/', LoginView.as_view()),
    path('register/', CreateUserView.as_view()),
    path('list/', ListUsersView.as_view()),
    path('logout/', LogoutView.as_view(), name='knox_logout'),
    path('logoutall/', LogoutAllView.as_view(), name='knox_logoutall'),

]
