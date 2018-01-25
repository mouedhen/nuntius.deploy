<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Selenkeys\Missions\App\Models\Customer::class, function (Faker $faker) {

    $rand = mt_rand(0, 10);

    $cinPassport = null;
    $taxRegistrationNumber = null;
    $category = 'company';

    if ($rand < 5) {
        $cinPassport = $faker->unique()->regexify('\d{9}');
        $category = 'particular';
    }
    else {
        $taxRegistrationNumber = $faker->unique()->regexify('\d{7}\w{3}\d{3}');
    }

    return [
        'name' => $faker->name,
        'cin_passport' => $cinPassport,
        'tax_registration_number' => $taxRegistrationNumber,
        'phone_number' => $faker->unique()->phoneNumber,
        'email' => $faker->unique()->email,
        'category' => $category,
        'address' => $faker->address,
    ];
});
