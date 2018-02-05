<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'v1'
], function () {

    Route::post('login', 'API\\Auth\\AccessController@login');
    Route::post('logout', 'API\\Auth\\AccessController@logout');

    Route::get('login', function() {
        return response()->json('login', \Illuminate\Http\JsonResponse::HTTP_OK);
    })->name('login');
    Route::get('logout', function() {
        return response()->json('logout', \Illuminate\Http\JsonResponse::HTTP_OK);
    })->name('logout');

    Route::group([
        'middleware' => 'auth:api'
    ], function() {
        Route::get('profile', 'API\\Auth\\AccessController@profile');

        Route::apiResources([
            'users' => 'API\\Resources\\UserController',
        ], [
            'except' => ['create', 'edit',]
        ]);
    });
});
