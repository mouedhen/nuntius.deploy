<?php
/**
 * MissionAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Models\Location;
use Selenkeys\Missions\App\Models\Mission;
use Selenkeys\Missions\App\Models\MissionDelayLog;

use Selenkeys\Missions\App\Http\Resources\MissionResource;

class MissionAPIController extends Controller
{
    public function index()
    {
        return MissionResource::collection(Mission::all());
    }

    public function show($id)
    {
        // return new Resource(Mission::findORFail($id));
        return new MissionResource(Mission::findORFail($id));
    }

    public function store(Request $request)
    {
        $params = [
            'estimated_start_date' => new Carbon($request->get('estimated_start_date')),
            'step' => 'plan',
            'customer_id' => $request->get('customer_id'),
            'fuel_unit_price' => $request->get('fuel_unit_price'),
            'start_counter' => $request->get('start_counter'),
        ];
        $mission = Mission::create($params);
        return new MissionResource($mission);
    }

    public function prepare(Request $request)
    {
        if ($request->get('location_id' != -1))
        {
            $location_params = [
                'longitude' => $request->get('longitude'),
                'latitude' => $request->get('latitude'),
                'address' => $request->get('address'),
            ];
            $location = Location::create($location_params);
            $location_id = $location->id;
        } else {
            $location_id = $request->get('location_id');
        }

        $params = [
            'location_id' => $location_id,
            'customer_id' => $request->get('customer_id'),
            'estimated_start_date' => $request->get('estimated_start_date'),
            'estimated_end_date' => $request->get('estimated_end_date'),
            'service_type' => $request->get('service_type'),
            'step' => 'prepare',
        ];
        return new MissionResource(Mission::create($params));
    }

    public function delay($id, Request $request)
    {
        $params = [
            'mission_id' => $id,
            'estimated_start_date' => $request->get('estimated_start_date'),
            'estimated_end_date' => $request->get('estimated_end_date'),
            'delay_reason' => $request->get('delay_reason'),
        ];
        MissionDelayLog::create($params);
        $mission = Mission::findOrFail($id);
        $mission->estimated_start_date = $request->get('estimated_start_date');
        $mission->estimated_end_date = $request->get('estimated_end_date');
        $mission->save();
        return new MissionResource($mission);
    }

    public function cancel($id)
    {
        $mission = Mission::findOrFail($id);
        $mission->step = 'cancel';
        $mission->save();
        return new MissionResource($mission);
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