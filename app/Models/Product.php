<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'image',
        'category_id',
        'user_id', // optional, if products belong to a seller
    ];

    /**
     * Relationships
     */

    // 🧩 Product belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // 👤 Product belongs to a user/seller
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
