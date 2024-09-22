from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse

def generate_tokens_and_set_cookie(user):
    refresh = RefreshToken.for_user(user)

    response = JsonResponse({
        'access': str(refresh.access_token)
    })

    # Устанавливаем refresh токен в HttpOnly cookie
    response.set_cookie(
        key='refresh_token',
        value=str(refresh),
        httponly=True,
        secure=False,  # Установите True в продакшене
        samesite='Lax'
    )

    return response
