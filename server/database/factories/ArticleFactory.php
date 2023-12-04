<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
// use Database\Factories\numberBetween
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $array = array('U', 'M', 'K');
        $rand = rand(0, 2);
        return [
            'name' => fake()->name(),
            'code' =>   $this->faker->numberBetween($min = 1500, $max = 6000),
            'unit' =>  Str::slug($array[$rand]),
            'description' =>  $this->faker->realText(120),
            // 'price' =>   Str::random(100),
            'price' => $this->faker->  numberBetween($min = 1500, $max = 6000),
            'quantity' =>   Str::slug(rand(1,100)),
            'id_categorie' => Category::all()->random()->id,
        ];
    }
}
