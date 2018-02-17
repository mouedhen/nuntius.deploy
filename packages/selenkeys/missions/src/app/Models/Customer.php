<?php
/**
 * Customer.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Selenkeys\Core\App\Traits\AutoLabelTrait;

/**
 * @property int $id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property Mission[] $missions
 * @property Contact[] $contacts
 */
class Customer extends Model
{
    use Notifiable, AutoLabelTrait;

    protected $table = 'customers';
    protected $fillable = ['name', 'cin_passport', 'tax_registration_number', 'phone_number',
        'email', 'category', 'address'];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function missions()
    {
        return $this->hasMany(Mission::class);
    }
}
