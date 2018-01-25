<?php
/**
 * LocationAutoLabelObserver.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Observers;


use Selenkeys\Missions\App\Models\Location;

class LocationAutoLabelObserver
{
    public function creating(Location $location)
    {
        $location->abv = 'LC';
        $location->setLabel();
    }
}