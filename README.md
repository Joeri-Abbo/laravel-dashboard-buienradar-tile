# Display buienradar on your dashboard.

[![Latest Version on Packagist](https://img.shields.io/packagist/v/joeri-abbo/laravel-dashboard-buienradar-tile.svg?style=flat-square)](https://packagist.org/packages/joeri-abbo/laravel-dashboard-buienradar-tile)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/joeri-abbo/laravel-dashboard-buienradar-tile/run-tests?label=tests)](https://github.com/joeri-abbo/laravel-dashboard-buienradar-tile/actions?query=workflow%3Arun-tests+branch%3Amaster)
[![Total Downloads](https://img.shields.io/packagist/dt/joeri-abbo/laravel-dashboard-buienradar-tile.svg?style=flat-square)](https://packagist.org/packages/joeri-abbo/laravel-dashboard-buienradar-tile)

This tile adds support to show buienradar widgets on your dashboard
<p align="center">
    <img width="512" src="https://github.com/solitweb/laravel-dashboard-date-time-tile/raw/master/screenshot.png">
</p>
This tile can be used on [the Laravel Dashboard](https://docs.spatie.be/laravel-dashboard).

## Installation

You can install the package via composer:

```bash
composer require joeri-abbo/laravel-dashboard-buienradar-tile
```

## Usage

In your dashboard view you use the `livewire:buienradar` component.
There are 3 variants of the widget.

- The first one is global overview of the netherlands.
- the second one is a overview oth the netherlands with a overview of the predicted weather.
- And the third one supports a map with a focus point. Based on lng and lat it shows the map. Optinal parameter is zoom
  for the zoom value. This int is default set to 8

```html

<x-dashboard>
    <livewire:buienradar position="a1" type="{{\JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_IMAGE}}"/>
    <livewire:buienradar position="b1" type="{{\JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_OVERVIEW}}"/>
    <livewire:buienradar position="c1" lat="51.84437" lng="4.16303"
                         type="{{\JoeriAbbo\Buienradar\BuienradarServiceProvider::TYPE_MAP}}"/>
</x-dashboard>
```

## Testing

``` bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
