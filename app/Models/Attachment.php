<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 30/01/18
 * Time: 01:12
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * @property int $id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property mixed $attachable
 * @property mixed $url
 */
class Attachment extends Model
{
    protected $guarded = [];
    protected $appends = ['url'];
    public function attachable()
    {
        return $this->morphTo();
    }
    public function getUrlAttribute()
    {
        return Storage::url($this->uid);
    }
    public static function boot()
    {
        parent::boot();
        static::deleting(function($attachment) {
            Storage::disk('public')->delete($attachment->uid);
        });
    }
}
