<?php
/**
 * CustomerAutoLabelObserver.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Observers;


use Selenkeys\Missions\App\Models\Contact;

class ContactAutoLabelObserver
{
    public function creating(Contact $contact)
    {
        $contact->abv = 'CT';
        $contact->setLabel();
    }
}