<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        $user = User::create($request->all());

        return response()->json([
                'success' => true,
                'message' => "Usuario creado exitosamente",
                'name' => $user->name,
                'surname' => $user->surname,
                'rol'=> 0,
                'token' => $user->createToken("API TOKEN")->plainTextToken
                ]);
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->all());

        return response()->json([
            "success" => true,
            "message" => "Usuario creado exitosamente",
            'token' => $user->createToken("API TOKEN")->plainTextToken
        ], 201);
    }

    public function loginUser(Request $request)
    {
        if(!Auth::attempt($request->only(['email', 'password'])))
        {
            return response()->json([
                'status' =>false,
                'message' => 'email y/o contraseña incorrectos'
            ], 401);
        }

        $user = User::where('email', $request->email)->first();

        return response()->json([
            'status' => true,
            'message' => 'Usuario logeado correctamente',
            'name' => $user->name,
            'lastName' => $user->surname,
            'rol'=> $user->rol,
            'token' => $user->createToken("API TOKEN")->plainTextToken,
        ], 200);
    }

    public function editUser(Request $request)
    {
        $user = $request->user();
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->save();

        return response()->json([
        'success' => true,
        ],200);
    }
}
