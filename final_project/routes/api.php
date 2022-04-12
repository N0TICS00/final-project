<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Course;
use App\Models\User;
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
Route::get('/courses', function(){
    return response(Course::All(), 200);
});
Route::get('/courses/{id}', function($id){
    return Course::where('id', $id)->first();
});
Route::delete('/courses/{id}', function($id){
    Course::find($id)->delete();
    return 204;
});
//USERS API
Route::get('/users', function(){
    return response(User::All(), 200);
});
Route::get('/users/{id}', function($id){
    return User::where('id', $id)->first();
});
Route::post('/users', function(Request $request){
    $resp = User::create($request->all());
    $resp->password= Hash::make($request->password);
    return $resp;
});

