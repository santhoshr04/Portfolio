import React, { useState } from "react";
import { FaEdit, FaCamera, FaHeart } from "react-icons/fa";

function Home() {
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
                            href="#home"
                            className={`${
                                darkMode ? "text-white" : "text-gray-800"
                            } hover:text-purple-500`}
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className={`${
                                darkMode ? "text-gray-300" : "text-gray-600"
                            } hover:text-purple-500`}
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className={`${
                                darkMode ? "text-gray-300" : "text-gray-600"
                            } hover:text-purple-500`}
                        >
                            About
                        </a>
                        <a
                            href="#about"
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

            <main className="container mx-auto px-4">
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
                <div
                    className="flex flex-col md:flex-row items-center pb-16 justify-between min-h-screen"
                    id="home"
                    >
                    {/* Left Section */}
                    <div className="md:w-1/2 text-center ps-4 md:text-left">
                        <h1
                        className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
                            darkMode ? "text-white" : "text-gray-800"
                        }`}
                        >
                        A Click Of <br />
                        Artistic Joy
                        </h1>
                        <p
                        className={`text-lg mb-8 ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                        >
                        Because every picture tells a story, let us help you tell yours.
                        </p>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                        Explore More
                        </button>
                    </div>

                    {/* Right Section - Images */}
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                            alt="Photographer taking photo"
                            className="w-full h-80 md:h-96 object-cover rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                        />
                        </div>
                        <div>
                        <img
                            src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                            alt="Person taking photos"
                            className="w-full h-40 md:h-48 object-cover rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                        />
                        </div>
                        <div>
                        <img
                            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            alt="Hands holding smartphone camera"
                            className="w-full h-40 md:h-48 object-cover rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                        />
                        </div>
                    </div>
                </div>

                <section className="rounded-2xl py-16 bg-[#0a0b14] py-20" id="services">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                            Our Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Professional Editing Card */}
                            <div className="bg-purple-600 rounded-xl p-8">
                                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                    <FaEdit className="text-purple-600 text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Professional Editing
                                </h3>
                                <p className="text-white/90">
                                    We do professional photo editing. Let us
                                    help you to take your photo next level.
                                </p>
                            </div>

                            {/* Casual Photography Card */}
                            <div className="rounded-xl p-8">
                                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                    <FaCamera className="text-white text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Casual Photography
                                </h3>
                                <p className="text-gray-300">
                                    You can hire us for any kind of casual
                                    Photography. Book us for your next events.
                                </p>
                            </div>

                            {/* Wedding Photography Card */}
                            <div className="rounded-xl p-8">
                                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                    <FaHeart className="text-white text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Wedding Photography
                                </h3>
                                <p className="text-gray-300">
                                    Wedding is the most memorable events of our
                                    life. Let us help you to capture it.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rounded-2xl mt-16 mb-16 py-16 bg-[#0a0b14] py-20" id="about">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Left side - Image grid */}
                            <div className="md:w-1/2  grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-1 md:row-span-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                                        alt="Hand holding camera"
                                        className="w-full rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 h-full object-cover rounded-2xl"
                                    />
                                </div>

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                        alt="Camera lens closeup"
                                        className="w-full rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 h-full  object-cover rounded-2xl"
                                    />
                                </div>
                                {/* <div>
              <img 
                src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" 
                alt="Person taking photos with flowers" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div> */}
                            </div>

                            {/* Right side - Text content */}
                            <div className="md:w-1/2">
                                <h3 className="text-purple-500 text-lg mb-2">
                                    Who Are We
                                </h3>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Capturing life as it happens
                                </h2>
                                <p className="text-gray-300 mb-8">
                                    "Artistic" is a studio of some passionate
                                    photographer. Our Goal is to capture your
                                    experience.
                                </p>
                                <a href="/about" className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-md transition duration-300">
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section id="gallery" className="bg-gray-950 py-16">
                    <div className="container mx-auto px-4">
                        
                        {/* Heading */}
                        <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Gallery</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A glimpse into our artistic world. Every frame tells a story worth remembering.
                        </p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        
                        {/* Gallery Item */}
                        <div className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
                            alt="Gallery Image 1"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                            src="https://aaftonline.com/blog/wp-content/uploads/2024/01/What-are-the-Benefits-of-Photography-Complete-Overview.png"
                            alt="Gallery Image 2"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                            src="https://www.format.com/wp-content/uploads/symmetrical_clouds_reflection_in_water.jpg"
                            alt="Gallery Image 3"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_0IU3WwMwGk_BQczZnUMpc9PCSBcAUPW8A&s"
                            alt="Gallery Image 4"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                            src="https://ychef.files.bbci.co.uk/1280x720/p08gfs3y.jpg"
                            alt="Gallery Image 5"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                            src="https://ecornell.cornell.edu/wp-content/uploads/sites/8/2021/05/AAPC01_Final_750x500-BW.jpg"
                            alt="Gallery Image 6"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        </div>
                    </div>
            </section>
            <section id="feedback" className="bg-gray-950 py-16">
                <div className="container mx-auto px-4">
                    
                    {/* Heading */}
                    <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hear directly from our happy clients who experienced the magic through our lens.
                    </p>
                    </div>

                    {/* Feedback Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Feedback Item */}
                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-500/50 transition duration-300">
                        <p className="text-gray-300 mb-4">
                        "Absolutely phenomenal work! Every photo captures the emotion perfectly. Highly recommend!"
                        </p>
                        <div className="flex items-center space-x-4">
                        <img
                            className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Client 1"
                        />
                        <div>
                            <h4 className="text-white font-semibold">Sarah Johnson</h4>
                            <p className="text-purple-400 text-sm">Wedding Client</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-500/50 transition duration-300">
                        <p className="text-gray-300 mb-4">
                        "Working with Artistic Studio was a dream. The photoshoot felt effortless and the results were stunning!"
                        </p>
                        <div className="flex items-center space-x-4">
                        <img
                            className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Client 2"
                        />
                        <div>
                            <h4 className="text-white font-semibold">Michael Lee</h4>
                            <p className="text-purple-400 text-sm">Portrait Client</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-500/50 transition duration-300">
                        <p className="text-gray-300 mb-4">
                        "They captured moments that we didn’t even realize were so precious until we saw the photos!"
                        </p>
                        <div className="flex items-center space-x-4">
                        <img
                            className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="Client 3"
                        />
                        <div>
                            <h4 className="text-white font-semibold">Emily Davis</h4>
                            <p className="text-purple-400 text-sm">Family Photoshoot</p>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
