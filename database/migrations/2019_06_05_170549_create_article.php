<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('name');
          $table->text('description');
          $table->string('image', 2083);
          $table->unsignedBigInteger('category_id');
          $table->foreign('category_id')->references('id')->on('article_category');
          $table->tinyInteger('bookable');
          $table->decimal('price', 8, 2);
          $table->decimal('tax_percentage', 8, 2)->default(20);
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
        Schema::dropIfExists('article');
    }
}
