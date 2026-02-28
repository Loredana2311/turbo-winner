<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function session(Request $request)
    {
        // placeholder: create Stripe checkout session using service/price
        // use \Stripe\Stripe::setApiKey(config('services.stripe.secret'));
        // Example implementation:
        // $session = \Stripe\Checkout\Session::create([
        //     'payment_method_types' => ['card'],
        //     'line_items' => [[
        //         'price_data' => [
        //             'currency' => 'gbp',
        //             'product_data' => ['name' => 'Massage appointment'],
        //             'unit_amount' => 5000,
        //         ],
        //         'quantity' => 1,
        //     ]],
        //     'mode' => 'payment',
        //     'success_url' => env('APP_URL').'/booking/confirmation',
        //     'cancel_url' => env('APP_URL').'/booking',
        // ]);
        // return response()->json(['sessionId' => $session->id]);
        
        return response()->json(['message' => 'not implemented'], 501);
    }
}
