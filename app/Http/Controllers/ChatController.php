<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    private $apiKey;
    private $modelName;

    public function __construct()
    {
        $this->apiKey = env('GEMINI_API_KEY');
        $this->modelName = env('GEMINI_MODEL_NAME', 'gemini-1.5-flash'); // default if missing
    }

    public function chat(Request $request)
    {
        try {
            $request->validate([
                'message' => 'required|string',
            ]);

            $userMessage = $request->input('message');

            $welcomeText = "👋 Hi there! I'm here to assist you in getting information related to R Santhosh's resume, skills, projects, and achievements. Feel free to ask! 🌟";

            $resumeSummary = $welcomeText . "\n\nResume Details:\n\n" .
                "Personal Info: R Santhosh\n" .
                "About Me: Highly motivated Full Stack Developer skilled in JavaScript, SQL, HTML, CSS, React JS, PHP, and MySQL. Participated in many hackathons.\n\n" .
                "Education: BCA, Patrician College of Arts and Science (2021–2024)\n\n" .
                "Skills:\n- Frontend: HTML, CSS, JavaScript, Bootstrap, React JS\n- Backend: JavaScript, SQL, PHP, Node JS\n- OS: Windows, Ubuntu\n- Tools: Photoshop, GIMP, Canva\n- Soft Skills: Team/Project Management\n\n" .
                "Experience:\n1. Full Stack Intern, iCrewSystems – Laravel, Tailwind CSS, Alpine.js, Livewire\n2. Freelance Developer, Newglimpse – Hospital Management System using HTML/CSS/JS/PHP/Python/SQL\n\n" .
                "Projects:\n- Smart Glove for sign-to-speech\n- AI Hospital Management System\n\n" .
                "Achievements:\n- Finalist, SIH 2022\n- Winner at IDEATHON 2022, INNOVATHON 2023, CODEASTHRA 2023\n\n" .
                "Roles:\n- Team Leader in 5+ hackathons\n- President, PIIC\n- VP, Innovation Council\n- Volunteer at national events";

            $payload = [
                "contents" => [
                    [
                        "role" => "user",
                        "parts" => [
                            [
                                "text" => $resumeSummary . "\n\nUser Query: " . $userMessage
                            ]
                        ]
                    ]
                ]
            ];

            $response = Http::withHeaders([
                'Content-Type' => 'application/json'
            ])->withoutVerifying()->post(
                "https://generativelanguage.googleapis.com/v1beta/models/{$this->modelName}:generateContent?key={$this->apiKey}",
                $payload
            );

            if ($response->successful()) {
                $aiReply = $response->json('candidates.0.content.parts.0.text');

                $thugReplies = [
                    "Sir/Madam, this is a resume help center. 🙏 Kindly ask only relevant questions. 📄",
                    "Dear user, unga kelvi inga varala. 🚫 This section is only for resume assistance. 🎓",
                    "Please note, idhu resume related queries ku tha. 🤝 Vera topics-ku suitable place illa. 📝",
                    "Respectfully informing, this is not the right place for general questions. 🙇‍♂️ Kindly check and ask accordingly. ✅",
                    "Inga resume matters mattum discuss panrom. 🙏 Ungal understanding-ku thanks. 🌟"
                ];

                if (str_contains(strtolower($aiReply), "i'm not sure") || str_contains(strtolower($aiReply), "does not relate") || str_contains(strtolower($aiReply), "unrelated")) {
                    return response()->json([
                        "reply" => $thugReplies[array_rand($thugReplies)]
                    ]);
                }

                $aiReply = $response->json('candidates.0.content.parts.0.text');

                // Format to HTML
                $formattedReply = nl2br(e($aiReply)); // Convert line breaks
                $formattedReply = preg_replace('/\*{1,2}([^\*]+)\*{1,2}/', '<strong>$1</strong>', $formattedReply); // bold
                $formattedReply = preg_replace('/- (.+)/', '<li>$1</li>', $formattedReply);

                if (str_contains($formattedReply, '<li>')) {
                    $formattedReply = "<ul class='list-disc list-inside ml-4'>$formattedReply</ul>";
                }

                return response()->json([
                    "reply" => "😊 " . $formattedReply
                ]);

            }

            return response()->json(["error" => $response->body()], 500);

        } catch (\Exception $e) {
            return response()->json(["error" => $e->getMessage()], 500);
        }
    }
  
    public function chatcheck()
    {
        return response()->json([
            'status' => 'ok',
            'routes' => [
                'POST /chat' => route('chat'),
                'GET /chatcheck' => route('chatcheck'),
            ],
        ]);
    }
}
