<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\EnsureTokenIsValid;
use App\Http\Middleware\CheckAdmin;
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
Route::get('/faq', function(){
    return view('course/faq');
});

Route::middleware([EnsureTokenIsValid::class])->group(function () {
    Route::get('/logout', function(){
        return view('course/logout');
    });
    Route::get('/courses', function(){
        return view('course/courses');
    });
    
});
Route::middleware([CheckAdmin::class])->group(function(){
    Route::get('/courses/admin', function(){
        return view('/course/admin');
    });
    Route::get('/courses/list', function(){
        return view('/course/list');
    });
});

