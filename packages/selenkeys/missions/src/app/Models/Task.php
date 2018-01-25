<?php
/**
 * Task.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Selenkeys\Core\App\Traits\AutoLabelTrait;

/**
 * @property \Carbon\Carbon $created_at
 * @property int $id
 * @property \Carbon\Carbon $updated_at
 * @property Mission $mission
 */
class Task extends Model
{
    use Notifiable, AutoLabelTrait;

    protected $table = 'tasks';
    protected $fillable = ['start_date_time', 'end_date_time', 'conductor', 'tractor',
        'tool', 'tool_configuration', 'depth_in_cm', 'width_in_m', 'average_speed',
        'worked_area', 'average_consumption', 'fuel_consumption', 'observation','mission_id'];

    public function mission()
    {
        return $this->belongsTo(Mission::class);
    }
}