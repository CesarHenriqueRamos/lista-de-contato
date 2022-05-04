<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//gets
Route::get('/',[UserController::class, 'getUserAll']);
Route::get('/{id}',[UserController::class, 'getUser']);
Route::get('/contact/{id}',[ContactController::class, 'getContact']);

//Post
Route::post('/createUser',[UserController::class, 'createUser']);
Route::post('/createContact',[ContactController::class, 'createContact']);

//Put
Route::put('/updateUser/{id}',[UserController::class, 'updateUser']);
Route::put('/updateContact/{id}',[ContactController::class, 'updateContact']);

//Delete
Route::delete('/deleteUser/{id}',[UserController::class, 'deleteUser']);
Route::delete('/deleteContact/{id}',[ContactController::class, 'deleteContact']);