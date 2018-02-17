<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 17/02/18
 * Time: 04:09
 */

namespace Selenkeys\Missions\App\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class CustomerResource extends Resource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'label' => $this->label,
            'name' => $this->name,
            'cin_passport' => $this->cin_passport,
            'tax_registration_number' => $this->tax_registration_number,
            'phone_number' => $this->phone_number,
            'email' => $this->email,
            'category' => $this->category,
            'address' => $this->address,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
            'contacts' => $this->contacts,
            // 'missions' => $this->missions,
        ];
    }
}