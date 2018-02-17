<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->increments('id');

            $table->string('label', '25')->unique();
            $table->integer('label_id')->unsigned();

            $table->decimal('longitude', 10, 7);
            $table->decimal('latitude', 10, 7);
            $table->unique(['latitude', 'longitude']);
            $table->text('address')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('locations', function (Blueprint $table) {
            $table->dropUnique('locations_latitude_longitude_unique');
        });

        Schema::dropIfExists('locations');
    }
}
