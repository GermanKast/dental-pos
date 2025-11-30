<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
        
            // Cliente que compra
            $table->foreignId('client_id')->constrained();
            
            // Vendedor que hizo la venta (Usuario logueado)
            $table->foreignId('user_id')->constrained();
            
            // Total de dinero de la venta
            $table->decimal('total', 10, 2);
            
            // Estado (Pendiente, Pagado, Entregado)
            $table->enum('status', ['pending', 'paid', 'delivered'])->default('pending');
            
            $table->timestamps(); // Fecha de venta (created_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
