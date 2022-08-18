<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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




Route::post('login', [UserController::class, 'login']);

 //Grâce à ce middleware on ne ppourra pas acceder aux routes sans le token
Route::group(['middleware' => 'auth.jwt'], function () {
//authentification
Route::post('register', [UserController::class, 'register']);
Route::get('logout', [UserController::class, 'logout']);
Route::get('user', [UserController::class, 'user']);

});
