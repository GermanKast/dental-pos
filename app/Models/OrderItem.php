<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'product_id', 'quantity', 'price'];

    // Pertenece a un producto (para saber el nombre, marca, etc.)
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
