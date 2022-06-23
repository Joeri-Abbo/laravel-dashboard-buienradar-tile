<x-dashboard-tile :position="$position">
    <link rel="stylesheet"
          href="{{asset(mix('/css/app.css', 'vendor/'. \JoeriAbbo\Buienradar\BuienradarServiceProvider::PACKAGE_NAME))}}">
    <script
        src="{{asset(mix('/js/app.js', 'vendor/'. \JoeriAbbo\Buienradar\BuienradarServiceProvider::PACKAGE_NAME))}}"></script>

    <div
        class="grid grid-rows-auto-1 gap-2 h-full flex {{\JoeriAbbo\Buienradar\BuienRadarHelper::getWrapperTypeClass($type)}}"
        id="buienradar-{{rand(1,2000)}}">
        <div wire:poll.{{ $refreshIntervalInSeconds }}s
             class="self-center content p-0 flex items-center justify-center w-full h-full">
            @if($type === \JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_IMAGE)
                <a href="https://www.buienradar.nl" target="_blank"
                   class="h-full w-full js-buienradar-image">
                </a>
            @elseif($type === \JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_OVERVIEW)
                <iframe SRC="https://gadgets.buienradar.nl/gadget/radarfivedays" WIDTH=256 HEIGHT=406>
                </iframe>
            @elseif($type === \JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_MAP)
                @if(!empty($lat) && !empty($lng))
                    <iframe
                        src="https://gadgets.buienradar.nl/gadget/zoommap/?lat={{$lat}}&lng={{$lng}}&overname=2&zoom={{$zoom}}&size=3&voor=0"
                        width=550 height=512>
                    </iframe>
                @else
                    Please add a lng and lat  parameter for your location
                @endif
            @endif
        </div>
    </div>
</x-dashboard-tile>
