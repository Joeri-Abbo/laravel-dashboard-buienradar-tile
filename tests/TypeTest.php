<?php

namespace JoeriAbbo\Buienradar\Tests;

use JoeriAbbo\Buienradar\BuienRadarHelper;
use JoeriAbbo\Buienradar\BuienradarServiceProvider;
use PHPUnit\Framework\TestCase;

class TypeTest extends TestCase
{
    /** @test */
    public function isValidTypeTest()
    {
        foreach (BuienradarServiceProvider::TYPES as $type) {
            $this->assertTrue(BuienRadarHelper::isValidType($type));
        }
        $this->assertFalse(BuienRadarHelper::isValidType('this is not a valid type'));
        $this->assertFalse(BuienRadarHelper::isValidType());
    }
}
