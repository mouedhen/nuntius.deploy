<?php
/**
 * Location.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Selenkeys\Core\App\Traits\AutoLabelTrait;

/**
 * @property int $id
 * @property Mission[] $missions
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Location extends Model
{
    use Notifiable, AutoLabelTrait;

    protected $table = 'locations';
    protected $fillable = ['name', 'longitude', 'latitude', 'address'];

    public function missions()
    {
        return $this->hasMany(Mission::class);
    }

    public function destinations()
    {
        return $this->hasMany(Transport::class, 'end_point');
    }

    public function starts()
    {
        return $this->hasMany(Transport::class, 'start_point');
    }
}