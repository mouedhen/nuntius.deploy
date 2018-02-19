<?php
/**
 * TaskAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Models\Task;

class TaskAPIController extends Controller
{
    public function store(Request $request)
    {
        $params = [
            'start_date_time' => new Carbon($request->get('start_date_time')),
            'end_date_time' => new Carbon($request->get('end_date_time')),
            'conductor_id' => $request->get('conductor_id'),
            'tractor_id' => $request->get('tractor_id'),
            'tool_id' => $request->get('tool_id'),
            'tool_configuration' => $request->get('tool_configuration'),
            'depth_in_cm' => $request->get('depth_in_cm'),
            'width_in_m' => $request->get('width_in_m'),
            'average_speed' => $request->get('average_speed'),
            'worked_area' => $request->get('worked_area'),
            'average_consumption' => $request->get('average_consumption'),
            'fuel_consumption' => $request->get('fuel_consumption'),
            'observation' => $request->get('observation'),
            'mission_id' => $request->get('mission_id'),
        ];
        return new Resource(Task::create($params));
    }
}