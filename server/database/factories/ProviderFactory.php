<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Provider>
 */
class ProviderFactory extends Factory
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
            'name' => $this->faker->name,
            'cuit' =>   $this->faker->numberBetween($min = 10000000000, $max = 99999999999),
            'direction' => substr($this->faker->address, 0, -15),
            'location' => $this->faker->city,
            'email' => $this->faker->email,
            'tel' => $this->faker->phoneNumber,
        ];
    }
}
