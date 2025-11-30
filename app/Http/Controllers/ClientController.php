<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Prescription; // Importante
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    // 1. Listar Clientes
    public function index()
    {
        return Inertia::render('Clients/Index', [
            'clients' => Client::latest()->get()
        ]);
    }

    // 2. Guardar nuevo Cliente
    public function store(Request $request)
    {
        $validated = $request->validate([
            'document' => 'required|unique:clients',
            'name' => 'required',
            'email' => 'nullable|email',
            'phone' => 'required',
        ]);

        Client::create($validated);

        return redirect()->back();
    }

    // 3. Ver detalle del Cliente (Historial de Fórmulas)
    public function show(Client $client)
    {
        // Cargamos las recetas ordenadas por fecha reciente
        $client->load(['prescriptions' => function ($query) {
            $query->latest();
        }]);

        return Inertia::render('Clients/Show', [
            'client' => $client
        ]);
    }

    // 4. Guardar una Fórmula para un Cliente
    public function storePrescription(Request $request, Client $client)
    {
        // Validamos solo lo básico, los números pueden ser 0
        $validated = $request->validate([
            'sphere_od' => 'numeric', 'cylinder_od' => 'numeric', 'axis_od' => 'numeric',
            'sphere_oi' => 'numeric', 'cylinder_oi' => 'numeric', 'axis_oi' => 'numeric',
            'addition' => 'numeric',
            'observation' => 'nullable|string'
        ]);

        // Laravel usa la relación para crear la receta automáticamente vinculada
        $client->prescriptions()->create($validated);

        return redirect()->back();
    }
}