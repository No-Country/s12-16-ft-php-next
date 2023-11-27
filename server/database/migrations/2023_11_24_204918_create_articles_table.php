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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 60);
            $table->string('code', 12)->nullable();
            $table->string('unit', 1);
            $table->unsignedInteger('id_categorie');
            $table->string('description', 120)->nullable();
            $table->decimal('price', 10, 2);
            $table->integer('quantity');
            $table->integer('quantity_alert')->nullable();
            $table->foreign('id_categorie')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
