<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Prescription extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'sphere_od', 'cylinder_od', 'axis_od',
        'sphere_oi', 'cylinder_oi', 'axis_oi',
        'addition', 'observation'
    ];

    // Una receta pertenece a un cliente
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }
}
