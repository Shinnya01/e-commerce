<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        
        if(auth()->user()->role === 'admin'){

            $products = Cache::remember('products:all', now()->addMinutes(5), function () {
                return Product::with(['user', 'category', 'subCategory'])
                    ->latest()
                    ->get();
            });

            $totalSellers = Cache::remember('users:seller_count', now()->addMinutes(5), function () {
                return User::where('role', 'seller')->count();
            });

            $totalProducts = Cache::remember('products:count', now()->addMinutes(5), function () {
                return Product::count();
            });

            return Inertia::render('admin-product-list', compact('products', 'totalSellers', 'totalProducts'));
        }elseif(auth()->user()->role === 'seller'){

            $products = Cache::remember("seller:{$user->id}:products", now()->addMinutes(5), function () use ($user) {
                return Product::with(['user', 'category', 'subCategory'])
                    ->where('user_id', $user->id)
                    ->latest()
                    ->get();
            });

            $productCount = Cache::remember("seller:{$user->id}:product_count", now()->addMinutes(5), function () use ($user) {
                return Product::where('user_id', $user->id)->count();
            });

            return Inertia::render('seller-product-list', compact('products', 'productCount'));
        }else{

            $products = Cache::remember('products:public', now()->addMinutes(5), function () {
                return Product::with(['user', 'category', 'subCategory'])
                    ->latest()
                    ->get();
            });

            return Inertia::render('products', compact('products'));
        }
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all(['id', 'name']);
        $subCategories = SubCategory::all(['id', 'name']);

        Cache::forget("seller:" . auth()->id() . ":products");
        Cache::forget("seller:" . auth()->id() . ":product_count");
        Cache::forget("products:all");
        Cache::forget("products:count");
        
        return Inertia::render('add-product', compact('categories', 'subCategories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'nullable|string|max:255',
            'price' => 'numeric',
            'barcode' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
            'base_price' => 'nullable|numeric',
            'discounted_price' => 'nullable|numeric',
            'stock' => 'nullable|numeric',
            'charge_tax' => 'boolean',
            'in_stock' => 'boolean',
            'status' => 'nullable|string',
            'category' => 'nullable|string',
            'sub_category' => 'nullable|string',
        ]);

        $validated['user_id'] = auth()->id();

        Product::create($validated);

        Cache::forget("seller:" . auth()->id() . ":products");
        Cache::forget("seller:" . auth()->id() . ":product_count");
        Cache::forget("products:all");
        Cache::forget("products:count");

        return redirect()->route('products.index')->with('success', 'Item created successfully!');

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('show-product', [
            'product' => $product->load('category', 'subCategory')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::all(['id', 'name']);
        $subCategories = SubCategory::all(['id', 'name']);

        return Inertia::render('edit-product', compact('product', 'categories', 'subCategories'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        Cache::forget("seller:" . $product->user_id . ":products");
        Cache::forget("seller:" . $product->user_id . ":product_count");
        Cache::forget("products:all");
        Cache::forget("products:count");
        Cache::forget("products:public");

        dd('update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        Cache::forget("seller:" . $userId . ":products");
        Cache::forget("seller:" . $userId . ":product_count");
        Cache::forget("products:all");
        Cache::forget("products:count");
        Cache::forget("products:public");
        
        dd('delete');
    }
}
