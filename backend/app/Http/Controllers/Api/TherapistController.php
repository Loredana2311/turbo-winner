<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Therapist;

class TherapistController extends Controller
{
    public function index()
    {
        return response()->json(Therapist::all());
    }

    public function show($id)
    {
        $therapist = Therapist::findOrFail($id);
        return response()->json($therapist);
    }
}
