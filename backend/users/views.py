from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response

class ProductListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        products = [
            {"id": 1, "name": "Product 1", "price": 100},
            {"id": 2, "name": "Product 2", "price": 200},
        ]
        return Response(products)
