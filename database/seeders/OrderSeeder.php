<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Necesitamos datos existentes
        $client = Client::first(); // Juan Pérez
        $user = User::first();     // Tú (Admin)
        
        // Productos
        $montura = Product::where('type', 'frame')->first();
        $lente = Product::where('type', 'lens')->first();

        if ($client && $user && $montura && $lente) {
            
            // 1. Crear la Cabecera de la Venta
            $order = Order::create([
                'client_id' => $client->id,
                'user_id' => $user->id,
                'total' => $montura->price + ($lente->price * 2), // Marco + 2 Lentes
                'status' => 'paid'
            ]);

            // 2. Agregar la Montura
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $montura->id,
                'quantity' => 1,
                'price' => $montura->price
            ]);

            // 3. Agregar los Lentes (Par)
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $lente->id,
                'quantity' => 2, // Izquierdo y Derecho
                'price' => $lente->price
            ]);
        }
    }
}
