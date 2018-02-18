<?php
/**
 * MissionResource.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class MissionResource extends Resource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'label' => $this->label,
            'step' => $this->step,

            'estimated_start_date' => (string) $this->estimated_start_date,
            'customer' => $this->customer,
            'fuel_unit_price' => $this->fuel_unit_price,
            'start_counter' => $this->start_counter,

            'estimated_end_date' => (string) $this->estimated_end_date,
            'service_type' => $this->service_type,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
            'tasks' => $this->tasks,
            'end_counter' => $this->end_counter,
        ];
    }
}