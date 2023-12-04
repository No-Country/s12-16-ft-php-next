<?php

namespace Database\Factories;

use App\Models\User;
use Faker\Core\DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bill>
 */
class BillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => User::all()->random()->id,
            'id_provider' => User::all()->random()->id,

            'date_ended' => now(),
            'description' => $this->faker->realText(120),
            
        ];
    }
}
