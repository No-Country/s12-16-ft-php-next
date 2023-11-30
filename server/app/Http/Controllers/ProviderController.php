<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;

class ProviderController extends Controller
{
    //
    private static $data = [
        'name' => 'required|string|max:60',
        'direction' => 'required|string|max:120'
    ];
    private static $message = [
        'required' => 'El :attribute es requerido',
	    'max'=> 'No puede contener mas de 120 caracteres'
    ];

    public function index()
    {
        $data['providers'] = Provider::all();
        return $data;
    }

    public function store(Request $request)
    {
        //
        $this->validate($request, static::$data, static::$message);

        $dataProvider = Provider::create($request->all());

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
        // dd($request);
        $this->validate($request, static::$data, static::$message);
        
        $provider->update($request->all());
        
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
