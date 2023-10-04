from django.db import models

class CustomerTable(models.Model):
    customerId   = models.CharField(primary_key=True, db_index=True, max_length=250)
    firstName    = models.CharField(max_length=250)
    lastName     = models.CharField(max_length=250)
    gender       = models.CharField(max_length=250)
    phone        = models.CharField(max_length=250)
    email        = models.CharField(max_length=250)
    cardNumber   = models.CharField(max_length=250)
    birthday     = models.CharField(max_length=250)
    memberExpiry = models.CharField(max_length=250)
    address1     = models.CharField(max_length=250)
    address2     = models.CharField(max_length=250)
    address3     = models.CharField(max_length=250, null=True, blank=True)
    city         = models.CharField(max_length=250)
    state        = models.CharField(max_length=250)
    ZIP          = models.CharField(max_length=250)
    rewardsPoint = models.CharField(max_length=250)
    credit       = models.CharField(max_length=250)
    discount     = models.CharField(max_length=250)
    pricingLevel = models.CharField(max_length=250)
    group        = models.CharField(max_length=250)
    notes        = models.CharField(max_length=250, null=True, blank=True)
    created_at   = models.DateTimeField("created_at", auto_now_add=True)
    updated_at   = models.DateTimeField("updated_at", auto_now=True)
    deleted_at   = models.DateTimeField("deleted_at", null=True, blank=True)

    def __str__(self):
        return self.customerId
