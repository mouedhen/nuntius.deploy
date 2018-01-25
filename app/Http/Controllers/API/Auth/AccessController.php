<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 24/01/18
 * Time: 12:13
 */

namespace App\Http\Controllers\API\Auth;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class AccessController extends Controller
{
    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('api');
    }

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])) {
            $user = Auth::user();
            $user['token'] = $user->createToken('nuntius')->accessToken;
            return response()->json($user, 200);
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        if (!$this->guard()->check()) {
            return response([
                'message' => 'No active user session was found'
            ], 401);
        }

        $request->user('api')->token()->revoke();

        // TODO force only one session per user
        // DB::table('oauth_access_tokens')->where('user_id', '=', $request->user('api')->id)->update(array('revoked' => false));
        // Auth::guard()->logout();

        Session::flush();

        Session::regenerate();


        return response([
            'message' => 'User was logged out'
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json($request->user(), 200);
    }
}