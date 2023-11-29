<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;


class ArticleController extends Controller
{
    public function index()
    {
        try{
            $articles = Article::select('id', 'name', 'code', 'unit', 'id_categorie', 'description', 'price', 'quantity', 'quantity_alert')
            ->where('status', True)
            ->paginate(5);

            return response()->success($articles, 'Articles found!');            
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }

    }

    public function show($Articleid)
    {
        try {
            $articles = Article::findOrFail($Articleid);

            return response()->success($articles , 'Student found!');

            } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function store(Request $request)
    {   
        try {
            $this->validate($request,[
                'name' => 'required',
                'code' => 'nullable',
                'id_categorie' => 'nullable',
                'description' => 'nullable',
                'price' => 'required|numeric|min:0',
                'unit' => 'required',
                'quantity' => 'nullable',
                'quantity_alert' => 'nullable',
            ]);
            
            $article = Article::create([
                'name' => $request->input('name'),
                'code' => $request->input('code'),
                'id_categorie' => $request->input('id_categorie'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
                'unit' => $request->input('stock'),
                'quantity' => $request->input('quantity'),
                'quantity_alert' => $request->input('quantity_alert'),
            ]);

            return response()->success([ $article ], 'Article successfully registered!');
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
                    'name' => 'required',
                    'code' => 'nullable',
                    'id_categorie' => 'nullable',
                    'description' => 'nullable',
                    'price' => 'required|numeric|min:0',
                    'unit' => 'required',
                    'quantity' => 'nullable',
                    'quantity_alert' => 'nullable',
                ]);
                $status = $request->filled('status');

                $article->update([
                    'name' => $request->input('name'),
                    'code' => $request->input('code'),
                    'id_categorie' => $request->input('id_categorie'),
                    'description' => $request->input('description'),
                    'price' => $request->input('price'),
                    'unit' => $request->input('stock'),
                    'quantity' => $request->input('quantity'),
                    'quantity_alert' => $request->input('quantity_alert'),
                ]);
            }
            return response()->success([$article], 'User updated successfully!');
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

            return response()->success($article, 'Articles delete!');
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }
}
