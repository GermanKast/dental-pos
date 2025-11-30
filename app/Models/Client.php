<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['document', 'name', 'email', 'phone'];

    // Un cliente tiene muchas recetas
    public function prescriptions(): HasMany
    {
        return $this->hasMany(Prescription::class);
    }
}
