<?php

namespace App\Http\Controllers\API\Resources;

use App\Http\Requests\API\Resource\Users\UserStoreRequest;
use App\Traits\API\Helpers\RestTrait;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\Resource;

class UserController extends Controller
{
    use RestTrait;

    public function index()
    {
        return $this->jsonResponse(Resource::collection(User::all()));
    }

    public function store(UserStoreRequest $request)
    {
        return $this->jsonResponse(new Resource(User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password'))
        ])));
    }

    public function show($id)
    {
        return $this->jsonResponse(new Resource(User::findOrFail($id)));
    }

    public function update(Request $request, $id)
    {
        // TODO implement user update logic on the controller
    }

    public function destroy($id)
    {
        User::findOrFail($id)
            ->delete();

        return $this->jsonResponse(
            'record deleted successfully',
            JsonResponse::HTTP_NO_CONTENT
        );
    }
}
