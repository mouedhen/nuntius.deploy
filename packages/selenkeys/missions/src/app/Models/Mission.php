<?php
/**
 * Mission.php
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
 * @property Customer $customer
 * @property Task[] $tasks
 * @property Location $location
 * @property Transport[] $transports
 */
class Mission extends Model
{
    use Notifiable, AutoLabelTrait;

    protected $table = 'missions';
    protected $fillable = [
        'status', // global
        'estimated_start_date', 'estimated_end_date', 'customer_id', 'location_id', //plan mission
        'cancellation_cause', // cancel mission
        'start_date', // validate mission
        'start_counter', 'fuel_unit_price', // launch mission
        'end_date',  'end_counter' // finish mission
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function transports()
    {
        return $this->hasMany(Transport::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}