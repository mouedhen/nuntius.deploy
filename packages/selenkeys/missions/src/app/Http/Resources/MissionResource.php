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
            'estimated_start_date' => (string) $this->estimated_start_date,
            'estimated_end_date' => (string) $this->estimated_end_date,
            'service_type' => $this->service_type,
            'customer' => $this->customer,
            'location' => $this->location,
            'step' => $this->step,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
            'tasks' => $this->tasks,
            'missions_delays_logs' => $this->missions_delays_logs,
            'fuel_unit_price' => $this->fuel_unit_price,
            'start_counter' => $this->start_counter,
            'end_counter' => $this->end_counter,
        ];
    }
}