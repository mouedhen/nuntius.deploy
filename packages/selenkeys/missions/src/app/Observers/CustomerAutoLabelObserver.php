<?php
/**
 * CustomerAutoLabelObserver.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Observers;


use Selenkeys\Missions\App\Models\Customer;

class CustomerAutoLabelObserver
{
    public function creating(Customer $customer)
    {
        $customer->abv = 'CL';
        $customer->setLabel();
    }
}