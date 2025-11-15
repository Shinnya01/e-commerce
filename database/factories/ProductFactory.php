<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // user_id will be assigned in the seeder
            'name' => $this->faker->words(3, true),
            'description' => $this->faker->sentence(),
            'price' => $this->faker->randomFloat(2, 50, 1000),
            'stock' => $this->faker->numberBetween(1, 100),
            'image' => null,

            // Assign random category and subcategory
            'category_id' => Category::inRandomOrder()->value('id'),
            'sub_category_id' => SubCategory::inRandomOrder()->value('id'),
        ];
    }
}
