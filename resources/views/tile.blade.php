<x-dashboard-tile :position="$position">
    <link rel="stylesheet"
          href="{{asset(mix('/css/app.css', 'vendor/'. \JoeriAbbo\Buienradar\BuienradarServiceProvider::PACKAGE_NAME."/assets"))}}">
    <script
        src="{{asset(mix('/js/app.js', 'vendor/'. \JoeriAbbo\Buienradar\BuienradarServiceProvider::PACKAGE_NAME."/assets"))}}"></script>

    <div class="grid grid-rows-auto-1 gap-2 h-full">
        <div
            class="flex items-center justify-center w-10 h-10 rounded-full"
            style="background-color: rgba(255, 255, 255, .9)"
        >
            <div class="text-3xl leading-none -mt-1">
                Tile title
            </div>
        </div>
        <div wire:poll.{{ $refreshIntervalInSeconds }}s class="self-center | divide-y-2">
            {{-- tile content --}}
        </div>
    </div>
</x-dashboard-tile>
