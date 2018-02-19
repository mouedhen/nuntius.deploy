<?php
/**
 * MissionAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Traits\API\Helpers\RestTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Models\Location;
use Selenkeys\Missions\App\Models\Mission;
use Selenkeys\Missions\App\Models\MissionDelayLog;

use Selenkeys\Missions\App\Http\Resources\MissionResource;

class MissionAPIController extends Controller
{
    use RestTrait;

    public function index()
    {
        return $this->jsonResponse(MissionResource::collection(Mission::all()));
    }

    public function show($id)
    {
        return $this->jsonResponse(new MissionResource(Mission::findORFail($id)));
    }

    public function store(Request $request)
    {
        $params = [
            'customer_id' => $request->get('customer_id'),
            'location_id' => $request->get('location_id'),
            'estimated_start_date' => new Carbon($request->get('estimated_start_date')),
            'estimated_end_date' => new Carbon($request->get('estimated_end_date')),
            'status' => 'planned',
        ];

        return $this->jsonResponse(new MissionResource(Mission::create($params)));
    }

    public function validateMission($id, Request $request)
    {
        $params = [
            'start_date' => new Carbon($request->get('start_date')),
            'status' => 'validated',
        ];
        return $this->missionStep($id, $params);
    }

    public function cancel($id, Request $request)
    {
        $params = [
            'cancellation_cause' => $request->get('cancellation_cause'),
            'status' => 'canceled',
        ];
        return $this->missionStep($id, $params);
    }

    public function launch($id, Request $request)
    {
        $params = [
            'start_counter' => $request->get('start_counter'),
            'fuel_unit_price' => $request->get('fuel_unit_price'),
            'status' => 'in_progress',
        ];
        return $this->missionStep($id, $params);
    }

    public function finish($id, Request $request)
    {
        $params = [
            'end_date' => new Carbon($request->get('end_date')),
            'end_counter' => $request->get('end_counter'),
            'status' => 'finished',
        ];
        return $this->missionStep($id, $params);
    }

    protected function missionStep($id, $params)
    {
        $record = Mission::findOrFail($id);
        $record->update($params);
        return $this->jsonResponse(new MissionResource($record));
    }

    public function destroy($id)
    {
        Mission::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return response()->json($data, 204);
    }
}