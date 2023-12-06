<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        try{
            $category = Category::select('id', 'name', 'color')
            ->paginate(6);

            return response()->json(['data' => $category, 'message' => 'Categories found!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }

    }

    public function show($Categoryid)
    {
        try {
            $category = Category::findOrFail($Categoryid)
            ->get();

            return response()->json(['data' => $category, 'message' => 'Category found!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function store(Request $request)
    {   
        try {
            $this->validate($request,[
                'name' => 'required|string',
                'color' => ['required', 'regex:/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i'],
            ]);
            
            $category = Category::create([
                'name' => $request->name,
                'color' => $request->color,
            ]);

            return response()->json(['data' => $category, 'message' => 'Category successfully registered!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function update(Request $request, $Categoryid)
    {
        try {
            $category = Category::find($Categoryid);

            if($category){

                $this->validate($request,[
                    'name' => 'string',
                    'color' => ['required', 'regex:/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i'],
                ]);

                $category->update([
                    'name' => $request->name,
                    'color' => $request->color,
                ]);
            }

            return response()->json(['data' => $category, 'message' => 'Category updated successfully!'], 200);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }

    public function destroy($Categoryid)
    {
        try{
            $category = Category::find($Categoryid);

            if($category){
                $category->delete();
            }

            return response()->json(['data' => $category, 'message' => 'Category delete!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }
}