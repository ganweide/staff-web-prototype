# Generated by Django 4.2.5 on 2023-10-11 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapi', '0005_alter_branchtable_about_alter_branchtable_opening_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppointmentTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerId', models.CharField(db_index=True, max_length=250)),
                ('phone', models.CharField(max_length=250)),
                ('email', models.CharField(max_length=250)),
                ('cardNumber', models.CharField(max_length=250)),
                ('birthday', models.CharField(max_length=250)),
                ('memberExpiry', models.CharField(max_length=250)),
                ('rewardsPoint', models.CharField(max_length=250)),
                ('credit', models.CharField(max_length=250)),
                ('discount', models.CharField(max_length=250)),
                ('pricingLevel', models.CharField(max_length=250)),
                ('group', models.CharField(max_length=250)),
                ('date', models.CharField(max_length=250)),
                ('time', models.CharField(max_length=250)),
                ('product', models.CharField(max_length=250)),
                ('location', models.CharField(max_length=250)),
                ('notes', models.CharField(blank=True, max_length=250, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated_at')),
                ('deleted_at', models.DateTimeField(blank=True, null=True, verbose_name='deleted_at')),
            ],
        ),
        migrations.CreateModel(
            name='PromotionTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('category', models.CharField(max_length=250)),
                ('startDate', models.CharField(max_length=250)),
                ('endDate', models.CharField(max_length=250)),
                ('branches', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated_at')),
                ('deleted_at', models.DateTimeField(blank=True, null=True, verbose_name='deleted_at')),
            ],
        ),
        migrations.CreateModel(
            name='VoucherTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerId', models.CharField(db_index=True, max_length=250)),
                ('branchId', models.CharField(max_length=250)),
                ('phone', models.CharField(max_length=250)),
                ('email', models.CharField(max_length=250)),
                ('expiryDate', models.CharField(max_length=250)),
                ('product', models.CharField(max_length=250)),
                ('notes', models.CharField(blank=True, max_length=250, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated_at')),
                ('deleted_at', models.DateTimeField(blank=True, null=True, verbose_name='deleted_at')),
            ],
        ),
    ]
