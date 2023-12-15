<?php

namespace App\Http\Controllers;

use App\Models\Movement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MovementController extends Controller
{
    //

    private static $rules = [
        'id_bill' => 'required|digits_between:0,10|integer',
        'id_article' => 'required|digits_between:0,10|integer',
        'quantity' => 'required|digits_between:0,11|integer',
    ];

    public static function create($request){
        $createTotal = $create = 0;

        $id_bill = $request['id_bill'];
        unset($request['id_bill']);

        // Obtén la instancia actual de la clase
        $instance = new self();

        foreach ($request['article'] as $key => $value) {
            $request['article'][$key]['id_bill'] = $id_bill;
            $createTotal++;
            $validator = $instance->validates($request['article'][$key]);
            if ($validator->fails()) {
                continue;
            } else {
                Movement::create($request['article'][$key]);
                $create++;
            }
        }

        return [
            "success" => true,
            'mensaje' =>
            "Se agregaron " . $create . " articulos de un total de " . $createTotal];
    }

    public function storeUpdate(Request $request)
    {
        //
        $deleteTotal = $delete = $createTotal = $create = $updateTotal = $update = 0;
        $id_bill = $request->id_bill;
        $data = request()->except(['_token', 'id_bill']);

        foreach ($data as $key => $value) {
            $data[$key]['id_bill'] = $id_bill;

            if (isset($value['delete']) && $value['delete'] == 'on') {
                $deleteTotal++;

                if ($value['id'] != null) {
                    MovementController::destroy($value['id']) ? $delete++ : $delete;
                }
            } elseif (isset($value['id'])) {
                $updateTotal++;
                
                $validator = $this->validates($data[$key]);
                if ($validator->fails()) {
                    continue;
                } else {
                    Movement::where('id', '=', $value['id'])->update($data[$key]);
                    $update++;
                }
            } else {
                $createTotal++;
                
                $validator = $this->validates($data[$key]);
                if ($validator->fails()) {
                    continue;
                } else {
                    Movement::create($data[$key]);
                    $create++;
                }
                
            }
        }
        return response()->json([
            "success" => true,
            'mensaje' =>
            "Se eliminaron " . $delete . " de un total de " . $deleteTotal . "<br>" .
            "Se actualizo " . $update . " de un total de " . $updateTotal . "<br>" .
            "Se crearon " . $create . " de un total de " . $createTotal . "<br>"]);
    }

    public function destroy($id)
    {
        //
        $movement = Movement::findOrFail($id);

        Movement::destroy($id);

        return true;
    }

    public function validates($data)
    {
        return Validator::make($data, static::$rules);
    }
}
