<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMissionsDelaysLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('missions_delays_logs', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('mission_id')->unsigned();
            $table->date('estimated_start_date');
            $table->date('estimated_end_date');
            $table->text('delay_reason');

            $table->timestamps();
        });

        Schema::table('missions_delays_logs', function (Blueprint $table) {
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
        Schema::dropIfExists('missions_delays_logs');
    }
}
