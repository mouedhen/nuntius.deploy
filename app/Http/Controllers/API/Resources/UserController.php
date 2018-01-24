<?php

namespace App\Http\Controllers\API\Resources;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\Resource;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(Resource::collection(User::all()));
    }
}
