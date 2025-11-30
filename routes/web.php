<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('products', ProductController::class)
    ->only(['index', 'store', 'update', 'destroy']);

    // Ruta base de recursos (index, store, show)
    Route::resource('clients', ClientController::class)->only(['index', 'store', 'show']);

    // Ruta personalizada para guardar la fórmula médica
    Route::post('/clients/{client}/prescriptions', [ClientController::class, 'storePrescription'])
        ->name('clients.prescriptions.store');

    Route::get('/pos', [OrderController::class, 'index'])->name('pos.index');
    Route::post('/pos', [OrderController::class, 'store'])->name('pos.store');

});

require __DIR__.'/auth.php';
