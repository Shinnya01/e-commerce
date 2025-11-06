<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all sellers
        $sellers = User::where('role', 'seller')->get();

        foreach ($sellers as $seller) {
            Product::factory()
                ->count(5)
                ->create([
                    'user_id' => $seller->id,
                ]);
        }
    }
}
