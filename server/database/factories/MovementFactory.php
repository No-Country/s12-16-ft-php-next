<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Bill;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movement>
 */
class MovementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'id_bill' => Bill::all()->random()->id,
            'id_article' => Article::all()->random()->id,
            'quantity'
            => $this->faker->numberBetween($min = 1, $max = 100),
        ];
    }
}
