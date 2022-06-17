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
        if(!$userInfo){
            return back()->with('error' ,'Wrong Password or Wrong Email');
        }
        else{
            if($req->password== $userInfo->password){
                $req->session()->put('user', $userInfo);
                return redirect("overview");
            }else{
                return back()->with('error' ,'Wrong Password or Wrong Email');
            }
        }
    }
}
