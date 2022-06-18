<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index(){
        return response()->json(User::All(), 200);
    }
    public function store(Request $req){
       return response()->json(User::create($req->all()),201);
    }
    public function delete($id){
        $deletedUser = User::find($id)->delete();
        return response()->json(null,204);
    }
    public function login(Request $req){

        $userInfo = User::where('email', '=', $req->email)->first();
        if($userInfo){
            if($userInfo->password == $req->password){
                return response()->json($userInfo,200);
            }
            else{
                return response()->json("Incorrect Email or Password",400);
            }
        }
        
    }
}
