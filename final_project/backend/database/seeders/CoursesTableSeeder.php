<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Course;
class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        // Create 50 course records
        for ($i = 0; $i < 50; $i++) {
            Course::create([
                'course_name' => $faker->text($maxNbChars = 80),
                'description' => $faker->paragraph,
                'creator' => $faker->text($maxNbChars = 20),
            ]);
        }
    }
}
