from django.db import models
from django.contrib.postgres.fields import ArrayField

from users.models import User

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class SubCategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    parent = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, null=True, on_delete=models.SET_NULL)
    sub_category = models.ForeignKey(
        SubCategory, blank=True, null=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True, null=True)
    added_by = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    variants = models.JSONField(default=None)
    total_stock = models.IntegerField(default=0)
    selling_price = models.IntegerField()
    cost_price = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField()
