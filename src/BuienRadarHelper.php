<?php

namespace JoeriAbbo\Buienradar;

class BuienRadarHelper
{
    /**
     * Get wrapper type class
     * @param string $type
     * @return string
     */
    public static function getWrapperTypeClass(string $type = ''): string
    {
        if (!in_array($type, BuienradarServiceProvider::TYPES)) {
            return '';
        }
        if ($type === BuienradarServiceProvider::TYPE_IMAGE) {
            return 'js-buienradar-image-wrapper';
        } elseif ($type === BuienradarServiceProvider::TYPE_MAP) {
            return 'js-buienradar-map-wrapper';
        } elseif ($type === BuienradarServiceProvider::TYPE_OVERVIEW) {
            return 'js-buienradar-overview-wrapper';
        }
    }
}
