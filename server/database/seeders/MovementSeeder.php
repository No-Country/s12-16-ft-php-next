<?php

namespace Database\Seeders;

use App\Models\Movement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Crea 5 datos de prueba
        Movement::factory(5)->create();
    }
}
