<?php

namespace JoeriAbbo\Buienradar;

class BuienRadarHelper
{

    public static function getWrapperTypeClass(string $type = ''): string
    {
        if (!in_array($type, BuienradarServiceProvider::TYPES)) {
            return '';
        }
        if ($type === BuienradarServiceProvider::TYPE_IMAGE) {

            return 'js-buienradar-image-wrapper';
        }
        return '';
    }
}
