from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'in_stock', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_price(self, value):
        """
        Valida se o preço é positivo
        """
        if value <= 0:
            raise serializers.ValidationError(
                "O preço deve ser maior que zero."
            )
        return value

    def validate_name(self, value):
        """
        Valida se o nome não está vazio
        """
        if not value or value.strip() == "":
            raise serializers.ValidationError(
                "O nome do produto não pode estar vazio."
            )
        return value.strip()