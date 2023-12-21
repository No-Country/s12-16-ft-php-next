<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Crea 3 datos de prueba categoria
        $categoryName = array(
            "Manuales",
            "Construcción", "Eléctricas"
        );

        foreach ($categoryName as &$name) {

            Category::create([
                'name' => $name,
                'color' => fake()->hexColor()
            ]);
        }
        

        // Category::factory(0)->create();

    }
}
