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

            $table->float('tool_configuration');
            $table->float('depth_in_cm');
            $table->float('width_in_m');
            $table->float('average_speed');
            $table->float('worked_area');
            $table->float('average_consumption');
            $table->float('fuel_consumption');

            $table->text('observation')->nullable();

            $table->integer('mission_id')->unsigned();
            $table->integer('conductor_id')->unsigned(); // TODO create staff management package
            $table->integer('tractor_id')->unsigned(); // TODO create fleet management package
            $table->integer('tool_id')->unsigned(); // TODO create purchase and inventory management package
            $table->timestamps();
        });

        Schema::table('tasks', function (Blueprint $table) {
            $table->foreign('mission_id')->references('id')->on('missions')->onDelete('cascade');
            $table->foreign('conductor_id')->references('id')->on('conductors')->onDelete('cascade');
            $table->foreign('tractor_id')->references('id')->on('tractors')->onDelete('cascade');
            $table->foreign('tool_id')->references('id')->on('tools')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropForeign(['mission_id', 'conductor_id', 'tractor_id', 'tool_id']);
        });

        Schema::dropIfExists('tasks');
    }
}
