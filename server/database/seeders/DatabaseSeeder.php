<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Article;
use App\Models\Bill;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //  Crear datos de prueba con Factory 3
        // Bill::factory(3)->create();
        // Utilizar BillSeeder crea n datos de acuerdo a lo definido en billseeder
       
        // $this->call(::class);
        $this->call(UserSeeder::class);
        $this->call(ProviderSeeder::class);
        $this->call(BillSeeder::class);
        $this->call(CategorySeeder::class); 
        $this->call(ArticleSeeder::class); 
        $this->call(MovementSeeder::class); 

    }
}
