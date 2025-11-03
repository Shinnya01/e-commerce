<?php

use Inertia\Inertia;
use Laravel\Fortify\Features;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    
    if(auth()->check() && auth()->user()->role !== 'user') {
        return redirect()->route('dashboard');

    }elseif(auth()->check() && auth()->user()->role === 'user') {
        return app(HomeController::class)->index();
    }
        return redirect()->route('login');

})->name('home');

Route::resource('home', HomeController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard')->middleware('role:admin,seller');

    Route::middleware('role:user')->group(function () {
        Route::resource('cart', CartController::class);
    });
    
    Route::resource('product', ProductController::class);
});

require __DIR__.'/settings.php';
