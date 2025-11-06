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
        'sub_category_id',
        'user_id', // belongs to a seller
    ];

    /**
     * Relationships
     */

    // 🧩 Product belongs to a main category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // 🧩 Product belongs to a sub category
    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    // 👤 Product belongs to a user (seller)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // alias for semantic clarity (same relationship)
    public function seller()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
