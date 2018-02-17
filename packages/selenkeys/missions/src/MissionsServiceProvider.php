<?php
/**
 * MissionsServiceProvider.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions;


use Selenkeys\Core\BaseServiceProvider;
use Selenkeys\Missions\App\Models\Contact;
use Selenkeys\Missions\App\Models\Customer;
use Selenkeys\Missions\App\Models\Location;
use Selenkeys\Missions\App\Models\Mission;
use Selenkeys\Missions\App\Models\Task;
use Selenkeys\Missions\App\Observers\ContactAutoLabelObserver;
use Selenkeys\Missions\App\Observers\CustomerAutoLabelObserver;
use Selenkeys\Missions\App\Observers\LocationAutoLabelObserver;
use Selenkeys\Missions\App\Observers\MissionAutoLabelObserver;
use Selenkeys\Missions\App\Observers\TaskAutoLabelObserver;

class MissionsServiceProvider extends BaseServiceProvider
{
    protected $dir = __DIR__;

    function boot()
    {
        parent::boot();

        Customer::observe(CustomerAutoLabelObserver::class);
        Contact::observe(ContactAutoLabelObserver::class);

        Location::observe(LocationAutoLabelObserver::class);
        Mission::observe(MissionAutoLabelObserver::class);
        Task::observe(TaskAutoLabelObserver::class);
    }
}
