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
        Schema::create('bills', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date_ended');
            $table->unsignedInteger('id_user');
            $table->string('description', 120)->nullable();
            $table->unsignedInteger('id_provider')->nullable();
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_provider')->references('id')->on('providers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bills');
    }
};
