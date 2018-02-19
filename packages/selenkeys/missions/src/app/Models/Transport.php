<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 19/02/18
 * Time: 00:22
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    protected $table = 'transports';
    protected $fillable = ['mission_id', 'start_point', 'end_point', 'start_date',
        'end_date', 'start_counter', 'end_counter', 'cost', 'distance',
        'fuel_consumption', 'fuel_unit_price'];

    public function belongsTo($related, $foreignKey = null, $ownerKey = null, $relation = null)
    {
    }

    public function location_start_point()
    {
        return $this->belongsTo(Location::class, 'start_point');
    }

    public function location_end_point()
    {
        return $this->belongsTo(Location::class, 'end_point');
    }

    public function mission()
    {
        return $this->belongsTo(Mission::class, 'mission_id');
    }

}