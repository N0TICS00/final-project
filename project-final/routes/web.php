<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// API INTERFACE
Route::get('/users', function () {
    return view('user/users');
});
Route::get('/courses', function(){
    return view('course/courses');
});
Route::get('/users/create', function(){
    return view('user/create');
});

//PAGE
Route::get('/', function(){
    return view('home');
});
Route::get('/login', function(){
    return view('login');
});


