from rest_framework import exceptions
from rest_framework.authentication import get_authorization_header
from knox.settings import knox_settings
from knox.auth import TokenAuthentication


class TokenAuth(TokenAuthentication):
    def authenticate(self, request):
        if 'auth_token' in request.COOKIES:
            auth = request.COOKIES.get('auth_token').encode().split()
        else:
            auth = get_authorization_header(request).split()
        prefix = knox_settings.AUTH_HEADER_PREFIX.encode()
        if not auth:
            return None
        if auth[0].lower() != prefix.lower():
            # Authorization header is possibly for another backend
            return None
        if len(auth) == 1:
            msg = ('Invalid token header. No credentials provided.')
            raise exceptions.AuthenticationFailed(msg)
        elif len(auth) > 2:
            msg = ('Invalid token header. '
                   'Token string should not contain spaces.')
            raise exceptions.AuthenticationFailed(msg)
        user, auth_token = super().authenticate_credentials(auth[1])
        return (user, auth_token)
