from django.db import models
from django.core.validators import MinValueValidator
from decimal import Decimal

class Product(models.Model):
    name = models.CharField(
        max_length=200,
        verbose_name="Nome do Produto",
        help_text="Nome do produto (máx. 200 caracteres)"
    )
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(Decimal('0.01'))],
        verbose_name="Preço",
        help_text="Preço do produto (deve ser maior que 0)"
    )
    in_stock = models.BooleanField(
        default=True,
        verbose_name="Em Estoque",
        help_text="Indica se o produto está disponível em estoque"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"

    def __str__(self):
        return f"{self.name} - R$ {self.price}"