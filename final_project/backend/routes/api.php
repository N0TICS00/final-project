<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\UsersController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//COURSES API
Route::get('/courses', [CoursesController::class,'index']);
Route::get('/courses/{course}', [CoursesController::class,'show']);
Route::post('/courses', [CoursesController::class,'store']);
Route::put('courses/{course}', [CoursesController::class,'update']);
Route::delete('/courses/{course}',[CoursesController::class,'delete']);
//USERS API
Route::get('/users',  [UsersController::class,'index']);
Route::get('/users/{user}', [UsersController::class,'show']);
Route::post('/users', [UsersController::class,'store']);
Route::delete('/users/{user}',[UsersController::class,'delete']);

