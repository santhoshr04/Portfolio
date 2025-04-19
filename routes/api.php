<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

Route::post('/chat', [ChatController::class, 'chat'])->name('chat');

Route::get('/chatbot', function (Request $request) {
    $response = Http::post(route('chat'), [
        'message' => 'how to create a flight'
    ]);

    return $response->json();
})->name('chatcheck');

Route::get('/test-gemini', function () {
    $apiKey = "AIzaSyDDpBd1cFjKD_is_tNpfkGbgBgcq1ZDwxc";
    $modelName = "gemini-1.5-flash";
    
    $response = Http::withHeaders([
        'Content-Type' => 'application/json',
    ])->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$apiKey}", [
        "contents" => [["role" => "user", "parts" => [["text" => "Hello bro how are you"]]]]
    ]);    

    return $response->json();
});