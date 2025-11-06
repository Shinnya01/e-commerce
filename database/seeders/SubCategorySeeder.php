<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Seeder;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcategories = [
            'Electronics' => ['Phones', 'Laptops', 'Accessories'],
            'Clothing' => ['Men', 'Women', 'Kids'],
            'Home & Kitchen' => ['Furniture', 'Appliances', 'Decor'],
            'Health & Beauty' => ['Skincare', 'Makeup', 'Supplements'],
            'Sports & Outdoors' => ['Equipment', 'Apparel', 'Footwear'],
        ];

        foreach ($subcategories as $categoryName => $subs) {
            $category = Category::where('name', $categoryName)->first();

            if ($category) {
                foreach ($subs as $sub) {
                    SubCategory::create([
                        'name' => $sub,
                        'category_id' => $category->id,
                    ]);
                }
            }
        }
    }
}
