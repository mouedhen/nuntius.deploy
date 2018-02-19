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
            'status' => $this->status,
            'estimated_start_date' => $this->estimated_start_date,
            'estimated_end_date' => $this->estimated_end_date,
            'customer_id' => $this->customer_id,
            'customer' => $this->customer,
            'location_id' => $this->location_id,
            'location' => $this->location,
            'cancellation_cause' => $this->cancellation_cause,
            'start_date' => $this->start_date,
            'start_counter' => $this->start_counter,
            'fuel_unit_price' => $this->fuel_unit_price,
            'end_date' => $this->end_date,
            'end_counter' => $this->end_counter,
            'tasks' => $this->tasks,
            'transports' => $this->transports,
        ];
    }
}