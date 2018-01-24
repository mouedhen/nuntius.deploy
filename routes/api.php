<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'v1',
], function () {

    Route::post('login', 'API\\Auth\\AccessController@login');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {

        Route::post('logout', 'API\\Auth\\AccessController@logout');
        Route::get('profile', 'API\\Auth\\AccessController@profile');

    });

});
