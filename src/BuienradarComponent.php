<?php

namespace JoeriAbbo\Buienradar;

use Illuminate\View\View;
use Livewire\Component;

class BuienradarComponent extends Component
{
    /**
     * @var
     */
    public $position;
    /**
     * @var
     */
    public $type;

    /**
     * @param string $position
     * @return void
     */
    public function mount(string $position)
    {
        $this->position = $position;
    }

    /**
     * @return View
     */
    public function render(): view
    {
        return view(BuienradarServiceProvider::PACKAGE_NAME . '::tile', [
            'refreshIntervalInSeconds' => config('dashboard.tiles.skeleton.refresh_interval_in_seconds') ?? 60,
        ]);
    }
}
