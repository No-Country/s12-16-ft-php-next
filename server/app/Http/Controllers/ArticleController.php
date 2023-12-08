<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;


class ArticleController extends Controller
{
    public function filter(Request $request){
        try{


            $validatedData = $request->validate([
                'name' => 'nullable',
                'unit' => 'nullable',
                'id_categorie' => 'nullable|numeric',
                'price' => 'nullable',
                'date' => 'nullable',
            ]);
            
            $articles = Article::when(isset($validatedData["name"]), function ($query) use ($validatedData) {
                $query->where("name", "like", "%" . $validatedData["name"] . "%");
            })
            ->when(isset($validatedData["unit"]), function ($query) use ($validatedData) {
                $query->where("unit", $validatedData["unit"]);
            })
            ->when(isset($validatedData["id_categorie"]), function ($query) use ($validatedData) {
                $query->where("id_categorie", $validatedData["id_categorie"]);
            })
            ->when(isset($validatedData["price"]), function ($query) use ($validatedData) {
                $query->where('price', '<=', $validatedData["price"]);
            })
            ->when(isset($validatedData["date"]), function ($query) use ($validatedData) {
                $query->where('created_at', '>=', $validatedData["date"]);
            })
            ->paginate(6);
    
            return response()->json(['data' => $articles, 'message' => 'Articles found!'], 200); 
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }

    public function index()
    {
        try{
            $articles = Article::select('id', 'name', 'code', 'unit', 'id_categorie', 'description', 'price', 'quantity', 'quantity_alert')
            ->paginate(6);
            

            return response()->json(['data' => $articles, 'message' => 'Articles found!'], 200);         
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }

    }

    public function show($Articleid)
    {
        try {
            $articles = Article::findOrFail($Articleid)
            ->get();

            return response()->json(['data' => $articles, 'message' => 'Article found!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function store(Request $request)
    {   
        try {
            $this->validate($request,[
                'name' => 'required|string',
                'code' => 'integer',
                'id_categorie' => 'required|integer',
                'description' => 'string',
                'price' => 'required|numeric|min:0',
                'unit' => 'required|string',
                'quantity' => 'required|nullable',
                'quantity_alert' => 'nullable',
            ]);
            
            $article = Article::create([
                'name' => $request->name,
                'code' => $request->code,
                'id_categorie' => $request->id_categorie,
                'description' => $request->description,
                'price' => $request->price,
                'unit' => $request->unit,
                'quantity' => $request->quantity,
                'quantity_alert' => $request->quantity_alert
            ]);

            return response()->json(['data' => $article, 'message' => 'Article successfully registered!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function update(Request $request, $Articleid)
    {
        try {
            $article = Article::find($Articleid);

            if($article){

                $this->validate($request,[
                    'name' => 'string',
                    'code' => 'integer',
                    'id_categorie' => 'integer',
                    'description' => 'string',
                    'price' => 'numeric|min:0',
                    'unit' => 'string',
                    'quantity' => 'nullable',
                    'quantity_alert' => 'nullable',
                ]);

                $article->update([
                    'name' => $request->name,
                    'code' => $request->code,
                    'id_categorie' => $request->id_categorie,
                    'description' => $request->description,
                    'price' => $request->price,
                    'unit' => $request->unit,
                    'quantity' => $request->quantity,
                    'quantity_alert' => $request->quantity_alert,
                ]);
            }

            return response()->json(['data' => $article, 'message' => 'Article updated successfully!'], 200);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }

    public function destroy($Articleid)
    {
        try{
            $article = Article::find($Articleid);

            if($article){
                $article->delete();
            }

            return response()->json(['data' => $article, 'message' => 'Articles delete!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }
}
