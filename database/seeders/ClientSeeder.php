<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Client;
use App\Models\Prescription;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear un Cliente
        $client = Client::create([
            'document' => '123456789',
            'name' => 'Juan Pérez',
            'email' => 'juan@ejemplo.com',
            'phone' => '3001234567',
        ]);

        // Crear una Fórmula médica asociada a Juan
        Prescription::create([
            'client_id' => $client->id,
            'sphere_od' => -1.50, // Miopía ojo derecho
            'cylinder_od' => -0.50, // Astigmatismo
            'axis_od' => 90,
            'sphere_oi' => -2.00, // Miopía ojo izquierdo
            'cylinder_oi' => 0.00,
            'axis_oi' => 0,
            'observation' => 'Uso permanente. Filtro luz azul recomendado.',
        ]);
    }
}
