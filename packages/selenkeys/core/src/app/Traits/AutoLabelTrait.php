<?php

namespace Selenkeys\Core\App\Traits;


use Carbon\Carbon;

/**
 * Trait AutoLabelTrait
 * @package app\Traits
 *
 * @property integer label_id
 */
trait AutoLabelTrait
{
    public $abv = 'DF';

    public function setLabelId()
    {
        $year = Carbon::now();
        $last = $this::whereYear('created_at', '=', $year)
            ->orderBy('label_id', 'desc')
            ->first();
        if ($last) {
            $lastYear = new Carbon($last->created_at);
            if ($year->isSameYear($lastYear)) {
                $this->label_id = $last->label_id + 1;
                return $this;
            }
        }
        $this->label_id = 1;
        return $this;
    }

    public function setLabel()
    {
        $year = Carbon::now()->year;
        $year = substr($year, -2);

        $this->setLabelId();
        $this->label = $this->abv .
            str_pad($this->label_id, 5, "0", STR_PAD_LEFT) .
            '-' . $year;
        return $this;
    }

}
