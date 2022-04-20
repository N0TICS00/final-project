<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Courses;
class CourseController extends Controller
{
    public function index(){
        return response(Courses::All(), 200);
    }
    public function store(Request $req){
        return response(Courses::create($req->all()),201);
    }
    public function delete($id){
        $deletedCourse= Courses::find($id)->delete();
        return response(null,204);
    }
}
