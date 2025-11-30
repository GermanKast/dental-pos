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
        Schema::create('prescriptions', function (Blueprint $table) {
            
            $table->id();
        
            // Relación con Cliente (Si borras al cliente, se borran sus fórmulas)
            $table->foreignId('client_id')->constrained()->onDelete('cascade');
            
            // Ojo Derecho (OD)
            $table->decimal('sphere_od', 5, 2)->default(0);   // Esfera (Miopía/Hipermetropía)
            $table->decimal('cylinder_od', 5, 2)->default(0); // Cilindro (Astigmatismo)
            $table->integer('axis_od')->default(0);           // Eje (Grados)
            
            // Ojo Izquierdo (OI)
            $table->decimal('sphere_oi', 5, 2)->default(0);
            $table->decimal('cylinder_oi', 5, 2)->default(0);
            $table->integer('axis_oi')->default(0);
            
            // Adición (Para presbicia/lectura)
            $table->decimal('addition', 5, 2)->default(0);
            
            $table->text('observation')->nullable(); // Notas del optómetra
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prescriptions');
    }
};
