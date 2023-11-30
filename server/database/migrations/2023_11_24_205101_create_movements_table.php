<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movements', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_bill');
            $table->unsignedInteger('id_article');
            $table->integer('quantity');
            $table->foreign('id_bill')->references('id')->on('bills')->onDelete('cascade');
            $table->foreign('id_article')->references('id')->on('articles')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movements');
    }
};
