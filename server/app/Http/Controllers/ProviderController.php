<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProviderController extends Controller
{
    //
    private static $rules = [
        'name' => 'required|string|max:60',
        'direction' => 'required|string|max:120'
    ];

    public function index()
    {
        $data['providers'] = Provider::all();
        return $data;
    }

    public function store(Request $request)
    {
        //
        $data = $request->all();
        $validator = Validator::make($data, static::$rules);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()->all()
                ]);
        }

        $dataProvider = Provider::create($data);

        return response()->json([
            "success" => true,
            "message" => "Proveedor creado exitosamente"
            ]);
    }

    public function show($id)
    {
        //
        $data['provider'] = Provider::findOrFail($id);
        return $data;
    }

    public function update(Request $request, $id)
    {
        //
        $provider = Provider::find($id);

        $data = $request->all();
        $validator = Validator::make($data, static::$rules, static::$message);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()->all()
                ]);
        }
        
        $provider->update($data);
        
        return response()->json([
            "success" => true,
            "message" => "Proveedor actualizado exitosamente"
            ]);
    }

    public function destroy($id)
    {
	    Provider::find($id)->delete();
        return response()->json([
            "success" => true,
            "message" => "Proveedor eliminado exitosamente",
        ]);
    }
}
