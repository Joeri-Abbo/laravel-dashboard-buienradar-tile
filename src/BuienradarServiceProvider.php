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
            __DIR__ . '/../resources/views' => resource_path('views/vendor/' . self::PACKAGE_NAME),
            __DIR__ . '/../resources/assets/build' => resource_path('views/vendor/' . self::PACKAGE_NAME . '/assets'),
        ], 'dashboard-buienradar-views');

        $this->loadViewsFrom(__DIR__ . '/../resources/views', self::PACKAGE_NAME);

        Livewire::component('buienradar', BuienradarComponent::class);
    }
}
