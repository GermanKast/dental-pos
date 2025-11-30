<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['client_id', 'user_id', 'total', 'status'];

    // Una venta tiene muchos items (detalle)
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    // Pertenece a un cliente
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    // Fue hecha por un vendedor
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
