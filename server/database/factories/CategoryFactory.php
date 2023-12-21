<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $categoryName = array(
            "Herramientas Manuales",
            "Materiales de Construcción", "Ferretería Eléctrica"
        );
        $categoryAleatoria = array_rand($categoryName);
        return [
            //
            'name' => $categoryName[$categoryAleatoria],

            'color' => fake()->hexColor(),

        ];
    }
}
