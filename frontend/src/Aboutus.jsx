import React, { useState } from "react";
import { FaEdit, FaCamera, FaHeart } from "react-icons/fa";

function Aboutus() {
    const darkMode = false;
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSendMessage = async () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setIsLoading(true)
            setInput("");
            try {
              const aiResponse = await fetch("http://localhost:3101/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await aiResponse.json();
            setIsLoading(false)
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: data.reply, sender: "bot" },
            ]);
            } catch(err) {
              setIsLoading(false)
              console.log(err);
            }
        }
    };

    return (
        <div
            className={`min-h-screen ${
                darkMode ? "bg-[#0a0b14]" : "bg-gray-100"
            }`}
        >
            <header className="container mx-auto px-10 py-4">
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-bold italic text-purple-500">
                        Artistic
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="/"
                            className={`${
                                darkMode ? "text-white" : "text-gray-800"
                            } hover:text-purple-500`}
                        >
                            Home
                        </a>
                        <a
                            href="/#services"
                            className={`${
                                darkMode ? "text-gray-300" : "text-gray-600"
                            } hover:text-purple-500`}
                        >
                            Services
                        </a>
                        <a
                            href="/cal-booking"
                            className={`${
                                darkMode ? "text-gray-300" : "text-gray-600"
                            } hover:text-purple-500`}
                        >
                            Contact
                        </a>
                        {/* <button 
              onClick={toggleDarkMode}
              className="bg-purple-500 bg-opacity-20 p-2 rounded-full text-purple-500"
            >
              {darkMode ? "X" : "Y"}
            </button> */}
                    </div>
                    <button className="md:hidden text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>
            </header>
            <main>
                <div>
                    <button
                        onClick={() => setShowChatbot(!showChatbot)}
                        className="text-black cursor-pointer fixed bottom-5 right-5 bg-white px-6 py-3 rounded-full font-bold shadow-md transition-all hover:bg-purple-500 hover:text-white z-50"
                    >
                        Need Help?
                    </button>
                </div>

                {/* Chatbot UI */}
                {showChatbot && (
                    <div className="fixed bottom-16 right-5 bg-white shadow-lg rounded-lg w-96 max-w-full transition-all ease-in-out duration-300 z-50">
                        {/* Header */}
                        <div className="flex justify-between items-center bg-purple-500 text-white p-3 rounded-t-lg">
                            <h3 className="font-bold text-lg">Chatbot</h3>
                            <button
                                onClick={() => setShowChatbot(false)}
                                className="text-xl font-bold hover:text-gray-300 transition-colors"
                            >
                                ✖️
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-3 space-y-2 max-h-[400px] sm:max-h-[450px] md:max-h-[500px]">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`p-3 rounded-lg max-w-[80%] my-1 ${
                                            msg.sender === "user"
                                                ? "bg-purple-500 text-white"
                                                : "bg-gray-200 text-black"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="p-3 rounded-lg my-1 bg-gray-200 text-black">
                                        Typing...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="flex items-center p-2 border-t border-gray-300">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Type a message..."
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="ml-2 bg-purple-500 text-white p-3 rounded-lg transition-colors hover:bg-purple-600"
                            >
                                ➤
                            </button>
                        </div>
                    </div>
                )}
                <section id="about" className="py-16 bg-gray-950 text-white">
                    <div className="container mx-auto px-6">
                        {/* Heading */}
                        <div className="text-center px-6 mb-12">
                        <h2 className="text-4xl font-bold mb-4">About Us</h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Artistic Photography Studio is more than just a business; it’s a creative journey. Our mission is to capture timeless moments while keeping up with the latest trends in the photography world. From weddings to portraits, we specialize in creating stunning visuals that truly represent the essence of our clients. Join us in creating beautiful memories that last forever.
                        </p>
                        </div>

                        {/* About Content */}
                        <div className="grid md:grid-cols-2 gap-12">
                        <div className="text-gray-300">
                            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
                            <p className="mb-4">
                            At Artistic Photography, we believe that every picture tells a story. Our vision is to capture moments in the most authentic way possible while embracing cutting-edge trends in photography. We stay ahead of the curve by continuously experimenting with new styles and technology to offer our clients the best in the industry.
                            </p>

                            <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
                            <ul className="list-disc list-inside space-y-3">
                            <li><span className="font-semibold">Experienced Team:</span> Our photographers are professionals with years of experience, ensuring your memories are captured with skill and care.</li>
                            <li><span className="font-semibold">Trend-Driven Style:</span> We keep our work fresh and relevant by embracing the latest photography trends, such as cinematic looks and drone photography.</li>
                            <li><span className="font-semibold">Customer-Focused Approach:</span> Your satisfaction is our top priority. We work closely with you to understand your vision and make it a reality.</li>
                            </ul>
                        </div>

                        <div>
                            <img
                            src="https://shotkit.com/wp-content/uploads/2020/11/get-into-photography-featured.jpg"
                            alt="Photography studio"
                            className="w-full h-auto hover:shadow-purple-500/50  rounded-lg shadow-xl object-cover"
                            />
                        </div>
                        </div>

                        {/* Trend Coverage */}
                        <div className="mt-16 text-center">
                            <h3 className="text-3xl font-semibold text-purple-500 mb-4">Covering the Latest Trends in Photography</h3>
                            <p className="text-lg text-gray-400 mb-6">
                                We understand that photography trends evolve, and that's why we’re always adapting. Whether it’s using drone photography for stunning aerial shots or incorporating unique lighting techniques, we make sure that our work is always fresh and in line with the latest trends. Here’s a glimpse at some of the exciting trends we’re embracing:
                            </p>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-800 hover:shadow-purple-500/50  p-6 rounded-lg shadow-lg">
                                <h4 className="text-xl font-semibold text-purple-500 mb-3">Drone Photography</h4>
                                <p className="text-gray-400">
                                    Aerial shots provide a unique perspective and are perfect for capturing grand landscapes and events. We use the latest drones to create breathtaking imagery.
                                </p>
                                </div>
                                <div className="bg-gray-800 hover:shadow-purple-500/50  p-6 rounded-lg shadow-lg">
                                <h4 className="text-xl font-semibold text-purple-500 mb-3">Cinematic Style</h4>
                                <p className="text-gray-400">
                                    With cinematic-style photography, we tell your story in the most dramatic and emotional way. Using lighting, angles, and post-production techniques, we make every photo feel like a movie scene.
                                </p>
                                </div>
                                <div className="bg-gray-800 hover:shadow-purple-500/50  p-6 rounded-lg shadow-lg">
                                <h4 className="text-xl font-semibold text-purple-500 mb-3">Natural Lighting</h4>
                                <p className="text-gray-400">
                                    Embracing the beauty of natural light, we create photos that feel warm, authentic, and timeless. Perfect for outdoor shoots and candid moments.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Aboutus;