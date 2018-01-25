<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('missions', function (Blueprint $table) {
            $table->increments('id');

            $table->string('label')->unique();
            $table->integer('label_id');

            $table->dateTimeTz('estimated_start_date')->nullable();
            $table->dateTimeTz('estimated_end_date')->nullable();

            $table->enum('service_type', ['ground_work', 'planting'])->default('ground_work');

            $table->integer('customer_id')->unsigned()->nullable();
            $table->integer('location_id')->unsigned()->nullable();

            $table->enum('step', ['plan', 'prepare', 'start', 'finish', 'cancel'])->default('plan');

            $table->timestamps();
        });

        Schema::table('missions', function (Blueprint $table) {
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('missions');
    }
}
