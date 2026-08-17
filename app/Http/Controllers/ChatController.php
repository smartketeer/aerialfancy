<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $apiKey = env('OPENROUTER_API_KEY');
        
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
            'HTTP-Referer' => config('app.url'),
            'X-Title' => 'AerialFancy Digital Agency Assistant',
        ])->post('https://openrouter.ai/api/v1/chat/completions', [
            'model' => 'google/gemini-2.5-flash',
            'max_tokens' => 1000,
            'messages' => $request->input('messages', []),
        ]);

        return response()->json($response->json(), $response->status());
    }
}
