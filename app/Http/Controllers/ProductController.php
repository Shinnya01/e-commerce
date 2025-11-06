<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $products = Product::with(['category', 'subCategory'])
            ->latest()
            ->get();

        if(auth()->user()->role === 'admin'){
            return Inertia::render('admin-product-list');
        }elseif(auth()->user()->role === 'seller'){
            return Inertia::render('seller-product-list', compact('products'));
        }else{
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

        

        Product::create($validated);

        return redirect()->route('product.index')->with('success', 'Item created successfully!');

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
