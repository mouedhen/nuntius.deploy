<?php
/**
 * MissionAutoLabelObserver.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Observers;


use Selenkeys\Missions\App\Models\Mission;

class MissionAutoLabelObserver
{
    public function creating(Mission $mission)
    {
        $mission->abv = 'MS';
        $mission->setLabel();
    }
}