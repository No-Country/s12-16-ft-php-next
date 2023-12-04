<?php

namespace Database\Seeders;

use App\Models\Provider;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Crea 5 datos de prueba
        Provider::factory(5)->create();
    }
}
