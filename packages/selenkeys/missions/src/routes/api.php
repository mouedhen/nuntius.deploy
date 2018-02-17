<?php

use \Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'api',

], function ($router) {

    Route::group([
        'prefix' => 'v1',
    ], function ($router) {
        Route::apiResources([
            'customers' => \Selenkeys\Missions\App\Http\Controllers\API\CustomerAPIController::class,
            'contacts' => \Selenkeys\Missions\App\Http\Controllers\API\ContactAPIController::class,

            'missions' => \Selenkeys\Missions\App\Http\Controllers\API\MissionAPIController::class,
            'tasks' => \Selenkeys\Missions\App\Http\Controllers\API\TaskAPIController::class,
        ], [
            'except' => ['create', 'edit',]
        ]);
    });
});