<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Provider;
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
            'id_provider' => $this->faker->optional()->randomElement(Provider::pluck('id')),
            'status' => $this->faker->boolean,
            'date_ended' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'description' => $this->faker->optional()->sentence,
            
        ];
    }
}
