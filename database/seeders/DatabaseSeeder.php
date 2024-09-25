<?php

namespace Database\Seeders;

use App\Models\Staff\Staff;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Staff::factory()->create([
            'name'  => 'Test User',
            'email' => 'test@example.com',
         ]);
    }
}
