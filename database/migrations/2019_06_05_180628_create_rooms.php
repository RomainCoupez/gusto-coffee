<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRooms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('name');
          $table->tinyInteger('privatized');
          $table->integer('nb_of_place')->nullable(); //Only if room is privatized then there is no need to handle places id
          $table->unsignedBigInteger('happy_hour_id');
          $table->foreign('happy_hour_id')->references('id')->on('happy_hours');
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
        Schema::table('rooms', function (Blueprint $table) {
            //
        });
    }
}
