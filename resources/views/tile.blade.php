<x-dashboard-tile :position="$position">
    <link rel="stylesheet"
          href="{{asset(mix('/css/app.css', 'vendor/'. \JoeriAbbo\Buienradar\BuienradarServiceProvider::PACKAGE_NAME))}}">
    <script
        src="{{asset(mix('/js/app.js', 'vendor/'. \JoeriAbbo\Buienradar\BuienradarServiceProvider::PACKAGE_NAME))}}"></script>
    <div
        class="grid grid-rows-auto-1 gap-2 h-full flex {{\JoeriAbbo\Buienradar\BuienRadarHelper::getWrapperTypeClass($type)}}"
        id="buienradar-{{rand(1,200)}}">
        <div wire:poll.{{ $refreshIntervalInSeconds }}s
             class="self-center content p-0 flex items-center justify-center w-full h-full">
            @if($type === \JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_IMAGE)
                <a href="https://www.buienradar.nl" target="_blank"
                   class="h-full w-full">
                    <div class="h-full w-full js-buienradar-image">
                    </div>
                </a>
            @else
                implement !
            @endif

            {{--            <IFRAME SRC="https://gadgets.buienradar.nl/gadget/radarfivedays" NORESIZE SCROLLING=NO HSPACE=0 VSPACE=0--}}
            {{--                    FRAMEBORDER=0 MARGINHEIGHT=0 MARGINWIDTH=0 WIDTH=256 HEIGHT=406>--}}

            {{--            </IFRAME>--}}

            {{--            <iframe--}}
            {{--                src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=51.84437&lng=4.16303&overname=2&zoom=8&naam=3223PA&size=2&voor=0"--}}
            {{--                scrolling=no width=100% height=256 frameborder=no></iframe>--}}
        </div>
    </div>
</x-dashboard-tile>
