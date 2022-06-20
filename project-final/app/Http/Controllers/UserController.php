<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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
            $email = $req->input('email');
            $password= $req->input('password');

            $user = User::where('email',$email)->first();
            if($password == $user->password){
                return response()->json(["user"=> $user],200);
            }
            else{
                return response()->json(["error"=>"Email or password is not matched"],400);;
            }
    }
}
