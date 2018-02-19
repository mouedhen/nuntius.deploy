<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 19/02/18
 * Time: 16:29
 */

namespace Selenkeys\Missions\App\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class TaskResource extends Resource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'start_date_time' => $this->start_date_time,
            'end_date_time' => $this->end_date_time,
            'tool_configuration' => $this->tool_configuration,
            'depth_in_cm' => $this->depth_in_cm,
            'width_in_m' => $this->width_in_m,
            'average_speed' => $this->average_speed,
            'worked_area' => $this->worked_area,
            'average_consumption' => $this->average_consumption,
            'fuel_consumption' => $this->fuel_consumption,
            'observation' => $this->observation,
            'mission_id' => $this->mission_id,
            'mission' => $this->mission,
            'conductor_id' => $this->conductor_id,
            'conductor' => $this->conductor,
            'tractor_id' => $this->tractor_id,
            'tractor' => $this->tractor,
            'tool_id' => $this->tool_id,
            'tool' => $this->tool,
        ];
    }
}