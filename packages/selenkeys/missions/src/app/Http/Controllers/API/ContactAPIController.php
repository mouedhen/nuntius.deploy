<?php
/**
 * ContactAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Traits\API\Helpers\RestTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Models\Contact;

class ContactAPIController extends Controller
{
    use RestTrait;

    public function index()
    {
        return Resource::collection(Contact::all());
    }

    public function show($id)
    {
        return $this->jsonResponse(new Resource(Contact::findORFail($id)));
    }

    public function store(Request $request)
    {
        $params = [
            'customer_id' => $request->get('customer_id'),
            'name' => $request->get('name'),
            'phone_number' => $request->get('phone_number'),
            'email' => $request->get('email'),
            'address' => $request->get('address'),
        ];
        return new Resource(Contact::create($params));
    }

    public function update($id, Request $request)
    {
        $params = [
            'customer_id' => $request->get('customer_id'),
            'name' => $request->get('name'),
            'phone_number' => $request->get('phone_number'),
            'email' => $request->get('email'),
            'address' => $request->get('address'),
        ];
        $contact = Contact::findOrFail($id);
        $contact->update($params);
        return new Resource($contact);
    }

    public function destroy($id)
    {
        Contact::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return response()->json($data, 204);
    }
}