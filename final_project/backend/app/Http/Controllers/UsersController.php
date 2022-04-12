<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Route;

class UsersController extends Controller
{
    public function index(){
        return response(User::All(), 200);
    }
    public function show(User $user){
        return $user;
    }
    public function store(Request $request){
        $resp = User::create($request->all());
        return response()->json($resp, 201);
    }
    public function delete(User $user){
        $user->delete();
        return response()->json(null,204);
    }
}
