<?php
/**
 * MissionDelayLog.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;

class MissionDelayLog extends Model
{
    protected $table = 'missions_delays_logs';
    protected $fillable = ['mission_id', 'estimated_start_date', 'estimated_end_date', 'delay_reason'];

    public function mission()
    {
        return $this->belongsTo(Mission::class);
    }
}