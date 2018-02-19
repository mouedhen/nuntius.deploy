<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 19/02/18
 * Time: 00:16
 */

namespace Selenkeys\Missions\App\Models;


use Illuminate\Database\Eloquent\Model;

class Conductor extends Model
{
    protected $table = 'conductors';
    protected $fillable = ['name'];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}