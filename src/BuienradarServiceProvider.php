<?php

namespace JoeriAbbo\Buienradar;

use Illuminate\Support\ServiceProvider;
use Livewire\Livewire;

class BuienradarServiceProvider extends ServiceProvider
{
    const PACKAGE_NAME = 'dashboard-buienradar-tile';

    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../resources/assets/build' => public_path('vendor/' . self::PACKAGE_NAME),
        ], 'public');

        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/' . self::PACKAGE_NAME),
        ], 'dashboard-buienradar-views');

        $this->loadViewsFrom(__DIR__ . '/../resources/views', self::PACKAGE_NAME);

        Livewire::component('buienradar', BuienradarComponent::class);
    }
}
