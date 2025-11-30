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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique(); // Código de barras o SKU
            $table->string('name');           // Ej: "RayBan Aviator"
            $table->string('brand')->nullable(); // Marca
            $table->decimal('price', 10, 2);  // Precio con 2 decimales
            $table->integer('stock')->default(0);
            
            // El 'type' es clave para filtrar en el frontend
            // frame: Monturas, lens: Lentes, accessory: Líquidos/Estuches
            $table->enum('type', ['frame', 'lens', 'accessory']);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
