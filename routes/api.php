<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'v1',
], function () {

    Route::post('login', 'API\\Auth\\AccessController@login');
    Route::post('logout', 'API\\Auth\\AccessController@logout');

    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });

});
