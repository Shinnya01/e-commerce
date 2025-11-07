<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
        'user_id',
        'uuid'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }

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
