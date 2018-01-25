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
 * @property Location $location
 * @property MissionDelayLog[] $missions_delays_logs
 * @property Task[] $tasks
 */
class Mission extends Model
{
    use Notifiable, AutoLabelTrait;

    protected $table = 'missions';
    protected $fillable = ['estimated_start_date', 'estimated_end_date', 'service_type',
        'customer_id', 'location_id', 'step', 'fuel_unit_price', 'start_counter', 'end_counter'];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function missions_delays_logs()
    {
        return $this->hasMany(MissionDelayLog::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}