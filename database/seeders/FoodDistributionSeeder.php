<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\Supplier;
use App\Models\Customer;

class FoodDistributionSeeder extends Seeder
{
    public function run(): void
    {
        // Create Categories
        $frozenFoods = Category::create([
            'name' => 'Frozen Foods',
            'type' => 'frozen_foods',
            'description' => 'Frozen meat, seafood, and vegetables',
            'is_active' => true,
        ]);

        $goods = Category::create([
            'name' => 'Dry Goods',
            'type' => 'goods',
            'description' => 'Rice, pasta, canned goods, and condiments',
            'is_active' => true,
        ]);

        $horeca = Category::create([
            'name' => 'HORECA Supplies',
            'type' => 'horeca',
            'description' => 'Hotel, Restaurant, and Catering supplies',
            'is_active' => true,
        ]);

        // Create Sample Products
        Product::create([
            'category_id' => $frozenFoods->id,
            'sku' => 'FRZ-001',
            'name' => 'Frozen Chicken Breast (1kg)',
            'description' => 'Premium quality frozen chicken breast',
            'cost_price' => 180.00,
            'selling_price' => 250.00,
            'unit' => 'kg',
            'stock_quantity' => 50,
            'min_stock_level' => 10,
            'storage_temp' => '-18°C',
            'brand' => 'Premium Chicken',
            'is_active' => true,
        ]);

        Product::create([
            'category_id' => $frozenFoods->id,
            'sku' => 'FRZ-002',
            'name' => 'Frozen Prawns (500g)',
            'description' => 'Large frozen prawns',
            'cost_price' => 320.00,
            'selling_price' => 450.00,
            'unit' => 'pack',
            'stock_quantity' => 30,
            'min_stock_level' => 5,
            'storage_temp' => '-18°C',
            'brand' => 'Ocean Fresh',
            'is_active' => true,
        ]);

        Product::create([
            'category_id' => $goods->id,
            'sku' => 'DRY-001',
            'name' => 'Rice (25kg)',
            'description' => 'Premium jasmine rice',
            'cost_price' => 1200.00,
            'selling_price' => 1500.00,
            'unit' => 'sack',
            'stock_quantity' => 100,
            'min_stock_level' => 20,
            'brand' => 'Golden Rice',
            'is_active' => true,
        ]);

        Product::create([
            'category_id' => $horeca->id,
            'sku' => 'HRC-001',
            'name' => 'Cooking Oil (5L)',
            'description' => 'Commercial grade cooking oil',
            'cost_price' => 450.00,
            'selling_price' => 580.00,
            'unit' => 'gallon',
            'stock_quantity' => 60,
            'min_stock_level' => 15,
            'brand' => 'Chef\'s Choice',
            'is_active' => true,
        ]);

        // Create Sample Suppliers
        Supplier::create([
            'name' => 'Metro Food Suppliers',
            'company_name' => 'Metro Food Corporation',
            'email' => 'sales@metrofood.com',
            'phone' => '0917-123-4567',
            'address' => '123 Food Street, Quezon City',
            'city' => 'Quezon City',
            'country' => 'Philippines',
            'payment_terms' => '30 days',
            'is_active' => true,
        ]);

        Supplier::create([
            'name' => 'Fresh Seafood Trading',
            'company_name' => 'Fresh Seafood Inc.',
            'email' => 'orders@freshseafood.ph',
            'phone' => '0918-234-5678',
            'address' => '456 Harbor Road, Manila',
            'city' => 'Manila',
            'country' => 'Philippines',
            'payment_terms' => '15 days',
            'is_active' => true,
        ]);

        // Create Sample Customers
        Customer::create([
            'name' => 'Grand Hotel Manila',
            'business_name' => 'Grand Hotel Corporation',
            'type' => 'hotel',
            'email' => 'procurement@grandhotel.com',
            'phone' => '0919-345-6789',
            'address' => '789 Hotel Avenue, Makati',
            'city' => 'Makati',
            'payment_terms' => 'Cash',
            'is_active' => true,
        ]);

        Customer::create([
            'name' => 'The Gourmet Restaurant',
            'business_name' => 'Gourmet Dining Inc.',
            'type' => 'restaurant',
            'email' => 'orders@gourmetdining.com',
            'phone' => '0920-456-7890',
            'address' => '321 Food Plaza, BGC',
            'city' => 'Taguig',
            'payment_terms' => '7 days',
            'is_active' => true,
        ]);

        Customer::create([
            'name' => 'Elite Catering Services',
            'business_name' => 'Elite Catering Co.',
            'type' => 'catering',
            'email' => 'bookings@elitecatering.ph',
            'phone' => '0921-567-8901',
            'address' => '555 Catering Street, Pasig',
            'city' => 'Pasig',
            'payment_terms' => 'Cash',
            'is_active' => true,
        ]);
    }
}
