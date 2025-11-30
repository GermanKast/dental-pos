<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /// 1. Monturas
        Product::create([
            'code' => 'FRM-001',
            'name' => 'Montura Aviador Clásica',
            'brand' => 'Ray-Ban',
            'price' => 450000.00,
            'stock' => 10,
            'type' => 'frame'
        ]);

        Product::create([
            'code' => 'FRM-002',
            'name' => 'Montura Pasta Negra',
            'brand' => 'Oakley',
            'price' => 320000.00,
            'stock' => 15,
            'type' => 'frame'
        ]);

        // 2. Lentes (El stock es simbólico, se cortan a medida)
        Product::create([
            'code' => 'LNS-001',
            'name' => 'Lente Monofocal Antireflejo',
            'brand' => 'Genérico',
            'price' => 80000.00,
            'stock' => 100,
            'type' => 'lens'
        ]);
        
        Product::create([
            'code' => 'LNS-002',
            'name' => 'Lente Transitions (Photocromático)',
            'brand' => 'Essilor',
            'price' => 250000.00,
            'stock' => 100,
            'type' => 'lens'
        ]);

        // 3. Accesorios
        Product::create([
            'code' => 'ACC-001',
            'name' => 'Kit de Limpieza',
            'brand' => 'ProLens',
            'price' => 15000.00,
            'stock' => 50,
            'type' => 'accessory'
        ]);
    }
}
