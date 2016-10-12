from django.db import models

class GroceryItem(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.DecimalField(max_digits=10,decimal_places = 2)
    price =models.DecimalField(max_digits=10,decimal_places = 2)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name