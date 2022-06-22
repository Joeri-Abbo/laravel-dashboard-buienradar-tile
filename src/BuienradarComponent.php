<?php

namespace JoeriAbbo\Buienradar;

use Livewire\Component;

class BuienradarComponent extends Component
{
    /**
     * @var
     */
    public $position;


    /**
     * @param string $position
     * @return void
     */
    public function mount(string $position)
    {
        $this->position = $position;
    }

    public function render()
    {
        return view(BuienradarServiceProvider::PACKAGE_NAME::tile, [
            'refreshIntervalInSeconds' => config('dashboard.tiles.skeleton.refresh_interval_in_seconds') ?? 60,
        ]);
    }
}
