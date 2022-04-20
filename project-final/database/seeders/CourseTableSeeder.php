<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Courses;
class CourseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            Courses::create([
                'name' => $faker->word(),
                'description' => $faker->paragraph,
                'creator' => $faker->name
            ]);
        }
    }
}
