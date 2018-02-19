<?php
/**
 * ConductorAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Traits\API\Helpers\RestTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Http\Resources\ConductorResource;
use Selenkeys\Missions\App\Models\Conductor;

class ConductorAPIController extends Controller
{
    use RestTrait;

    public function index()
    {
        return $this->jsonResponse(Resource::collection(Conductor::all()));
    }

    public function show($id)
    {
        return $this->jsonResponse(new ConductorResource(Conductor::findORFail($id)));
    }

    public function store(Request $request)
    {
        $params = [
            'name' => $request->get('name'),
        ];
        return $this->jsonResponse(new ConductorResource(Conductor::create($params)));
    }

    public function update($id, Request $request)
    {
        $params = [
            'name' => $request->get('name'),
        ];
        $record = Conductor::findOrFail($id);
        $record->update($params);
        return $this->jsonResponse(new ConductorResource($record));
    }

    public function destroy($id)
    {
        Conductor::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return $this->jsonResponse($data, 204);
    }
}