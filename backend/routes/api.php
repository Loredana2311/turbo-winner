<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\TherapistController;

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

Route::get('/services', [ServiceController::class,'index']);
Route::get('/services/{id}', [ServiceController::class,'show']);
Route::get('/therapists', [TherapistController::class,'index']);
Route::get('/therapists/{id}', [TherapistController::class,'show']);
Route::post('/checkout/session', [\App\Http\Controllers\Api\CheckoutController::class,'session']);
