<?php
/**
 * CustomerAutoLabelObserver.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Observers;


use Selenkeys\Missions\App\Models\Task;

class TaskAutoLabelObserver
{
    public function creating(Task $task)
    {
        $task->abv = 'TASK';
        $task->setLabel();
    }
}