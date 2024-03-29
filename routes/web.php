<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::get('/finance', function () {
            return Inertia::render('Dashboard/FinanceDashboard');
        })->name('finance');

        Route::get('/analytic', function () {
            return Inertia::render('Dashboard/AnalyticDashboard');
        })->name('analytic');
    });

    /** APPS */

    /** UI */
    Route::prefix('elements')->name('elements.')->group(function () {
        Route::get('/alert', function () {
            return Inertia::render('Elements/AlertElement');
        })->name('alert');
        Route::get('/avatar', function () {
            return Inertia::render('Elements/AvatarElement');
        })->name('avatar');
        Route::get('/badge', function () {
            return Inertia::render('Elements/BadgeElement');
        })->name('badge');
        Route::get('/button', function () {
            return Inertia::render('Elements/ButtonElement');
        })->name('button');
    });

    /** USER AND PAGES */
    Route::prefix('pages')->name('pages.')->group(function () {
        Route::get('/blank', function () {
            return Inertia::render('Blank');
        })->name('blank');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
