<?php

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\MovementController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ExcelController;

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

//------USUARIO------ Damian
Route::post('/user/create', [UserController::class, 'createUser']);
Route::post('/user/login', [UserController::class, 'loginUser']);
Route::get('/user', [UserController::class, 'loginUser']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware('auth:sanctum')->put('/user/edit', [UserController::class, 'editUser']);
Route::get('/export', [ExcelController::class, 'export']);
//Facu
Route::get('/provider', [ProviderController::class, 'index']);
Route::get('/provider/{id}', [ProviderController::class, 'show']);
Route::post('/provider/create', [ProviderController::class, 'store']);
Route::put('/provider/edit/{id}', [ProviderController::class, 'update']);
Route::delete('/provider/delete/{id}', [ProviderController::class, 'destroy']);

Route::get('/bill', [BillController::class, 'index']);
Route::get('/bill/{id}', [BillController::class, 'show']);
Route::post('/bill/create', [BillController::class, 'store']);
Route::post('/bill/createArticle', [BillController::class, 'storeArticle']);
Route::put('/bill/finalized/{id}', [BillController::class, 'finalized']);
Route::post('/movement/update', [MovementController::class, 'storeUpdate']);

//Lorenzo
Route::post('/article/filter', [ArticleController::class, 'filter']);
Route::apiResource('article', ArticleController::class)->except('create','edit');
Route::apiResource('category', CategoryController::class)->except('create','edit');

// Breyner
//  host/api/reporte
Route::get('/reporte', [ReportController::class, 'report']);


