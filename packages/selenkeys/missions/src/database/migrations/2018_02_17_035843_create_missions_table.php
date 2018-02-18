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
            $table->enum('status', ['planned', 'validated', 'in_progress', 'finished', 'canceled'])
                ->default('planned');

            $table->dateTimeTz('estimated_start_date')->nullable();
            $table->float('fuel_unit_price')->nullable();
            $table->integer('customer_id')->unsigned()->nullable();
            $table->string('start_counter')->nullable();

            $table->dateTimeTz('estimated_end_date')->nullable();
            $table->string('end_counter')->nullable();

            $table->timestamps();
        });

        Schema::table('missions', function (Blueprint $table) {
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('missions', function (Blueprint $table) {
            $table->dropForeign(['customer_id']);
        });
        Schema::dropIfExists('missions');
    }
}
