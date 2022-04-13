<?php

namespace App\Http\Controllers;
use App\Models\Course;
use Illuminate\Http\Request;

class CoursesController extends Controller
{
    public function index(){
        return response(Course::All(), 200);
    }
    public function show(Course $course){
        return $course;
    }
    public function store(Request $request){
        $resp = Course::create($request->all());
        return response()->json($resp, 201);
    }
    public function update(Request $request, Course $course){
        $course->update($request->all());
        return response()->json($course, 200);
    }
    public function delete(Course $course){
        $course->delete();
        return response()->json(null,204);
    }
    
}
