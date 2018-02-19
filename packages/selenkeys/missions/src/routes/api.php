<?php

use \Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'api',
], function ($router) {

    Route::group([
        'prefix' => 'v1',
        'middleware' => 'auth:api'
    ], function ($router) {

        Route::apiResources([
            'customers' => \Selenkeys\Missions\App\Http\Controllers\API\CustomerAPIController::class,
            'contacts' => \Selenkeys\Missions\App\Http\Controllers\API\ContactAPIController::class,
            'conductors' => \Selenkeys\Missions\App\Http\Controllers\API\ConductorAPIController::class,
            'tractors' => \Selenkeys\Missions\App\Http\Controllers\API\TractorAPIController::class,
            'tools' => \Selenkeys\Missions\App\Http\Controllers\API\ToolAPIController::class,

            'tasks' => \Selenkeys\Missions\App\Http\Controllers\API\TaskAPIController::class,
        ], [
            'except' => ['create', 'edit',]
        ]);

        Route::apiResource(
            'missions',
            \Selenkeys\Missions\App\Http\Controllers\API\MissionAPIController::class,
            [
                'except' => ['create', 'edit', 'update']
            ]);

        Route::put(
            'missions/{id}/validate',
            '\Selenkeys\Missions\App\Http\Controllers\API\MissionAPIController@validateMission'
        )->where('id', '[0-9]+');

        Route::put(
            'missions/{id}/cancel',
            '\Selenkeys\Missions\App\Http\Controllers\API\MissionAPIController@cancel'
        )->where('id', '[0-9]+');

        Route::put(
            'missions/{id}/launch',
            '\Selenkeys\Missions\App\Http\Controllers\API\MissionAPIController@launch'
        )->where('id', '[0-9]+');

        Route::put(
            'missions/{id}/finish',
            '\Selenkeys\Missions\App\Http\Controllers\API\MissionAPIController@finish'
        )->where('id', '[0-9]+');

    });
});