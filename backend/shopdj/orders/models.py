from django.db import models

from users.models import User
from products.models import Product

# Create your models here.

class Order(models.Model):
    ordered_by = models.ForeignKey(User, on_delete=models.PROTECT)
    order_amt = models.IntegerField()
    payment_status = models.CharField(default='Order Created')
    shipment_status = models.CharField(default='Order Created')
    tracking_id = models.CharField(default='Processing')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

