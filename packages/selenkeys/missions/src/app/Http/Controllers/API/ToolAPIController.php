<?php
/**
 * ToolAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Traits\API\Helpers\RestTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Http\Resources\ToolResource;
use Selenkeys\Missions\App\Models\Tool;

class ToolAPIController extends Controller
{
    use RestTrait;

    public function index()
    {
        return $this->jsonResponse(Resource::collection(Tool::all()));
    }

    public function show($id)
    {
        return $this->jsonResponse(new ToolResource(Tool::findORFail($id)));
    }

    public function store(Request $request)
    {
        $params = [
            'designation' => $request->get('designation'),
        ];
        return $this->jsonResponse(new ToolResource(Tool::create($params)));
    }

    public function update($id, Request $request)
    {
        $params = [
            'designation' => $request->get('designation'),
        ];
        $record = Tool::findOrFail($id);
        $record->update($params);
        return $this->jsonResponse(new ToolResource($record));
    }

    public function destroy($id)
    {
        Tool::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return $this->jsonResponse($data, 204);
    }
}