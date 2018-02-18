<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transports', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('mission_id')->unsigned()->nullable();
            $table->foreign('mission_id')->references('id')->on('missions')->onDelete('cascade');

            $table->integer('start_point')->unsigned()->nullable();
            $table->foreign('start_point')->references('id')->on('locations')->onDelete('cascade');

            $table->integer('end_point')->unsigned()->nullable();
            $table->foreign('end_point')->references('id')->on('locations')->onDelete('cascade');


            $table->dateTimeTz('start_date')->nullable();
            $table->dateTimeTz('end_date')->nullable();

            $table->string('start_counter')->nullable();
            $table->string('end_counter')->nullable();

            $table->float('cost')->nullable();
            $table->float('distance')->nullable();
            $table->float('fuel_consumption')->nullable();
            $table->float('fuel_unit_price')->nullable();

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
        Schema::table('transports', function (Blueprint $table) {
            $table->dropForeign(['mission_id', 'start_point', 'end_point']);
        });
        Schema::dropIfExists('transports');
    }
}
