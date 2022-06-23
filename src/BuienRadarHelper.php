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
        if (!self::isValidType($type)) {
            return '';
        }
        if ($type === BuienradarServiceProvider::TYPE_IMAGE) {
            return 'js-buienradar-image-wrapper';
        } elseif ($type === BuienradarServiceProvider::TYPE_MAP) {
            return 'js-buienradar-map-wrapper -m-4';
        } elseif ($type === BuienradarServiceProvider::TYPE_OVERVIEW) {
            return 'js-buienradar-overview-wrapper -m-4';
        }
    }

    /**
     * Is the type valid
     * @param string $type
     * @return bool
     */
    public static function isValidType(string $type = ''): bool
    {
        return in_array($type, BuienradarServiceProvider::TYPES);
    }
}
