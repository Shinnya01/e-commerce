<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Electronics',
            'Clothing',
            'Home & Kitchen',
            'Health & Beauty',
            'Sports & Outdoors',
        ];

        foreach ($categories as $category) {
            Category::create(['name' => $category]);
        }
    }
}
