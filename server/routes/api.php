<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProviderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/user/create', [UserController::class, 'createUser']);
Route::post('/user/login', [UserController::class, 'loginUser']);

Route::get('/provider', [ProviderController::class, 'index']);
Route::get('/provider/{id}', [ProviderController::class, 'show']);
Route::post('/provider/create', [ProviderController::class, 'store']);
Route::put('/provider/edit/{id}', [ProviderController::class, 'update']);
Route::delete('/provider/delete/{id}', [ProviderController::class, 'destroy']);