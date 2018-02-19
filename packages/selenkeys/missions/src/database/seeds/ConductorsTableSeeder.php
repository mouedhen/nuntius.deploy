<?php

use Illuminate\Database\Seeder;

class ConductorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Selenkeys\Missions\App\Models\Conductor::class, 10)->create();
    }
}
