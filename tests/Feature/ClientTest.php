<?php

use App\Models\User;
use App\Models\Client;

test('client list page is displayed', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/clients');
    
    $response->assertStatus(200);
});

test('new client can be created', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/clients', [
        'document' => '99887766',
        'name' => 'Paciente de Prueba',
        'phone' => '3001234567',
        'email' => 'test@paciente.com',
    ]);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect();
    
    $this->assertDatabaseHas('clients', [
        'document' => '99887766',
    ]);
});

test('prescription can be added to client', function () {
    $user = User::factory()->create();
    $client = Client::factory()->create(); // Usamos factory

    $response = $this->actingAs($user)->post("/clients/{$client->id}/prescriptions", [
        'sphere_od' => -1.25,
        'cylinder_od' => -0.50,
        'axis_od' => 90,
        'sphere_oi' => -2.00,
        'observation' => 'Test Observation',
    ]);

    $response->assertSessionHasNoErrors();
    
    $this->assertDatabaseHas('prescriptions', [
        'client_id' => $client->id,
        'sphere_od' => -1.25,
    ]);
});