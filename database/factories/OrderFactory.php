<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Client;
use App\Models\User;

class OrderFactory extends Factory
{
    public function definition(): array
    {
        return [
            // Si creamos una orden, crea automáticamente un cliente y un usuario asociados
            'client_id' => Client::factory(),
            'user_id' => User::factory(),
            'total' => $this->faker->randomFloat(2, 50, 500), // Precio entre 50 y 500
            'status' => $this->faker->randomElement(['paid', 'pending', 'delivered']),
        ];
    }
}