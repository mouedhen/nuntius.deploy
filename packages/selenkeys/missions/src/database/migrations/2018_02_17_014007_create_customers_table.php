<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');

            $table->string('label')->unique();
            $table->integer('label_id')->unsigned();

            $table->string('name', 100);

            $table->string('cin_passport')->nullable();
            $table->string('tax_registration_number')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->nullable();
            $table->enum('category', ['particular', 'company'])->default('company');
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
        Schema::dropIfExists('customers');
    }
}
