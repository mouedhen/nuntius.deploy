<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 18/11/17
 * Time: 02:15
 */

namespace Core\Helpers;


class Price
{
    /**
     * Helper function to calculate the TTC price from the HT price
     *
     * @param float $htPrice
     * @param float $tvaPercentage
     * @return float
     */
    public static function htToTtc(float $htPrice, float $tvaPercentage) : float
    {
        return $htPrice + $tvaPercentage;
    }

    /**
     * Helper function to calculate the HT price from the TTC price
     *
     * @param float $ttcPrice
     * @param float $tvaPercentage
     * @return float
     */
    public function ttcToHt(float $ttcPrice, float $tvaPercentage) : float
    {
        return (100 * $ttcPrice) / (100 + $tvaPercentage);
    }
}