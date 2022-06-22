<?php

namespace JoeriAbbo\Buienradar;

use Illuminate\Support\ServiceProvider;
use Livewire\Livewire;

class BuienradarServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/dashboard-buienradar'),
        ], 'dashboard-buienradar-views');

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'dashboard-buienradar');

        Livewire::component('buienradar', BuienradarComponent::class);
    }
}
