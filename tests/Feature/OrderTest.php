<?php

use App\Models\User;
use App\Models\Client;
use App\Models\Product;
use App\Models\Order;

test('pos page is displayed', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/pos');
    
    $response->assertStatus(200);
});

test('sale transaction is processed correctly', function () {
    $user = User::factory()->create();
    $client = Client::factory()->create();
    
    // 1. Crear un producto con Stock de 10
    $product = Product::factory()->create([
        'price' => 100,
        'stock' => 10
    ]);

    // 2. Simular el carrito de compras (Compramos 2 unidades)
    $cartPayload = [
        [
            'id' => $product->id,
            'quantity' => 2
        ]
    ];

    // 3. Enviar la petición de venta
    $response = $this->actingAs($user)->post('/pos', [
        'client_id' => $client->id,
        'cart' => $cartPayload
    ]);

    // 4. Verificaciones
    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('dashboard'));

    // A. Verificar que se creó la orden
    $this->assertDatabaseHas('orders', [
        'client_id' => $client->id,
        'total' => 200, // 100 * 2
    ]);

    // B. Verificar que se creó el detalle (Order Item)
    $this->assertDatabaseHas('order_items', [
        'product_id' => $product->id,
        'quantity' => 2,
        'price' => 100,
    ]);

    // C. ¡CRÍTICO! Verificar que el stock bajó de 10 a 8
    $this->assertDatabaseHas('products', [
        'id' => $product->id,
        'stock' => 8,
    ]);
});

test('sale fails if stock is insufficient', function () {
    $user = User::factory()->create();
    $client = Client::factory()->create();
    
    // Producto con solo 1 en stock
    $product = Product::factory()->create(['stock' => 1]);

    // Intentamos comprar 5
    $response = $this->actingAs($user)->post('/pos', [
        'client_id' => $client->id,
        'cart' => [[
            'id' => $product->id,
            'quantity' => 5
        ]]
    ]);

    // Debe fallar y tener errores en la sesión
    $response->assertSessionHasErrors('error');
    
    // El stock debe seguir intacto
    $this->assertDatabaseHas('products', [
        'id' => $product->id,
        'stock' => 1,
    ]);
});
