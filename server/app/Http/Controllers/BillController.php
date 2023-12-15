<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\MovementController;

class BillController extends Controller
{
    //
    private static $rules = [
        'date_ended' => 'required|date_format:Y-m-d H:i:s',
        'id_user' => 'required|integer|digits_between:0,10',
        'description' => 'nullable|string|max:120',
        'id_provider' => 'nullable|integer|digits_between:0,10',
        'status' => 'required|boolean'
    ];

    public function index()
    {
        $data['bills'] = Bill::all();
        return $data;
    }

    public function show($id)
    {
        $data['bills'] = Bill::findOrFail($id);
        return $data;
    }

    public function store(Request $request)
    {
        //
        $data = $request->all();
        $data['status'] = false; 
        $data['date_ended'] = now()->toDateTimeString();
        // dd($data);
        $validator = Validator::make($data, static::$rules);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()->all()
                ]);
        }

        $dataBill = Bill::create($data);
        
        return response()->json([
            "success" => true,
            "message" => "Se creo la factura " . $dataBill->id . " exitosamente"
            ]);
    }

    public function storeArticle(Request $request)
    {
        //
        $data = $request->all();
        $data['bill']['status'] = false; 
        $data['bill']['date_ended'] = now()->toDateTimeString();
        // dd($data);
        $validator = Validator::make($data['bill'], static::$rules);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()->all()
                ]);
        }

        $dataBill = Bill::create($data['bill']);

        $dataArticle = $request->except('bill');
        $dataArticle['id_bill'] = $dataBill->id;

        // dd($dataArticle);  
        // Llamar al método en MovementController con datos
        $resultado = MovementController::create($dataArticle);

        return response()->json([
            "success" => true,
            "message" => ["Se creo la factura " . $dataBill->id . " exitosamente", 
            $resultado['mensaje']]
            ]);
    }

    public function finalized($id)
    {
        //
        $bill = Bill::find($id);
        $bill->status = true; 

        $bill->finalized();
        
        return response()->json([
            "success" => true,
            "message" => "Factura finalizada exitosamente"
            ]);
    }
}
