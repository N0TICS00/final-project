<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;

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
//USER
Route::get('/users', [UserController::class,'index']);
Route::post('/users', [UserController::class,'store']);
Route::post('/users/login', [UserController::class,'login']);
Route::delete('/users/{id}', [UserController::class,'delete']);
//COURSE
Route::get('/courses', [CourseController::class,'index']);
Route::post('/courses', [CourseController::class,'store']);
Route::delete('/courses/{id}', [CourseController::class,'delete']);


Route::group(['middleware' => ['web']], function () {

});
