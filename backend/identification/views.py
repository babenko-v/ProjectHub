from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from rest_framework_simplejwt.views import TokenRefreshView
from django.http import JsonResponse
from rest_framework import status

@method_decorator(csrf_protect, name='dispatch')
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(request, email=email, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            response = JsonResponse({
                'access': str(refresh.access_token)
            })
            response.set_cookie(
                key='refresh_token',
                value=str(refresh),
                httponly=True,
                secure=False,
                samesite='Lax'
            )
            return response
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh_token')

        if not refresh_token:
            return JsonResponse({'error': 'Refresh token not found'}, status=status.HTTP_401_UNAUTHORIZED)

        data = {'refresh': refresh_token}
        request.data = data

        return super().post(request, *args, **kwargs)
