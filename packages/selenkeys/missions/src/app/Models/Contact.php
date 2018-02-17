<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 17/02/18
 * Time: 02:44
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Selenkeys\Core\App\Traits\AutoLabelTrait;

class Contact extends Model
{
    use Notifiable, AutoLabelTrait;

    protected $table = 'contacts';
    protected $fillable = ['name', 'phone_number', 'email', 'address'];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}