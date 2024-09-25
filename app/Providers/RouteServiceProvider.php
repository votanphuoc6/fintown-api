<?php

namespace App\Providers;

use App\Models\Mongo\Company;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Route::bind('company', function ($value) {
            return Company::where('symbol', strtoupper($value))->firstOrFail();
        });
    }
}
