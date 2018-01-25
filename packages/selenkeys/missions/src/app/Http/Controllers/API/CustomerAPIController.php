<?php
/**
 * CustomerAPIController.php
 * Project: nuntius.release
 */

namespace Selenkeys\Missions\App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Selenkeys\Missions\App\Models\Customer;

class CustomerAPIController extends Controller
{
    public function index()
    {
        return Resource::collection(Customer::all());
    }

    public function show($id)
    {
        return new Resource(Customer::findORFail($id));
    }

    public function store(Request $request)
    {
        $params = [
            'name' => $request->get('name'),
            'cin_passport' => $request->get('cin_passport'),
            'tax_registration_number' => $request->get('tax_registration_number'),
            'phone_number' => $request->get('phone_number'),
            'email' => $request->get('email'),
            'category' => $request->get('category'),
            'address' => $request->get('address'),
        ];
        return new Resource(Customer::create($params));
    }

    public function destroy($id)
    {
        Customer::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return response()->json($data, 204);
    }
}