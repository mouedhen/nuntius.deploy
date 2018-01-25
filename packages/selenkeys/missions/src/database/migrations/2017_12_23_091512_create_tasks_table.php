<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label')->unique();
            $table->integer('label_id');

            $table->dateTimeTz('start_date_time');
            $table->dateTimeTz('end_date_time');

            $table->string('conductor'); // TODO create staff management package
            $table->string('tractor'); // TODO create fleet management package
            $table->string('tool'); // TODO create purchase and inventory management package
            $table->float('tool_configuration');
            $table->float('depth_in_cm');
            $table->float('width_in_m');
            $table->float('average_speed');
            $table->float('worked_area');
            $table->float('average_consumption');
            $table->float('fuel_consumption');

            $table->text('observation')->nullable();

            $table->integer('mission_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('tasks', function (Blueprint $table) {
            $table->foreign('mission_id')->references('id')->on('missions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
