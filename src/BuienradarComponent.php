<?php

namespace JoeriAbbo\Buienradar;

use Livewire\Component;

class BuienradarComponent extends Component
{
    public $position;


    public function mount(string $position)
    {
        $this->position = $position;
    }


    public function render()
    {
        return view('dashboard-skeleton-tile::tile', [
            'refreshIntervalInSeconds' => config('dashboard.tiles.skeleton.refresh_interval_in_seconds') ?? 60,

        ]);
    }
}
