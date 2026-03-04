from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'in_stock', 'created_at']
    list_filter = ['in_stock', 'created_at']
    search_fields = ['name']
    ordering = ['-created_at']