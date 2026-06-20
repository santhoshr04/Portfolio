import { useState, useRef, useEffect } from "react";

const Chat = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("http://portfolio.test/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                setMessages((prev) => [...prev, { text: "⚠️ Error: Invalid server response.", sender: "bot" }]);
                return;
            }

            if (data?.reply) {
                setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
            } else {
                setMessages((prev) => [...prev, { text: "⚠️ Error: No reply field found.", sender: "bot" }]);
            }

        } catch {
            setMessages((prev) => [...prev, { text: "⚠️ Error connecting to chatbot.", sender: "bot" }]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    return (
        <>
            {/* Floating Chat Icon */}
            <button
                onClick={() => setShowChatbot(!showChatbot)}
                className="fixed bottom-5 right-5 bg-[#905FFF] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.4 0-2.722-.3-3.89-.83L3 20l1.15-3.76C3.42 14.7 3 13.4 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>

            {/* Chatbot Window */}
            {showChatbot && (
                <div className="fixed bottom-20 right-5 bg-[#040817] text-white border border-[#905FFF] shadow-2xl rounded-2xl w-96 flex flex-col h-[500px] z-50 overflow-hidden">
                    <div className="flex justify-between items-center bg-[#905FFF] p-4">
                        <h3 className="font-semibold">Chatbot</h3>
                        <button onClick={() => setShowChatbot(false)} className="text-white">
                            {/* Modern Close Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.707-10.707a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293a1 1 0 10-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-xs p-3 rounded-2xl ${msg.sender === "user" ? "bg-[#905FFF] text-white" : "bg-white text-black"}`}
                                    dangerouslySetInnerHTML={{ __html: msg.text }}
                                />
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-xs p-3 rounded-2xl bg-white text-black">
                                    Typing...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="flex items-center p-3 border-t border-[#905FFF] bg-[#040817]">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent text-white border border-[#905FFF] rounded-2xl p-2 focus:outline-none placeholder:text-[#905FFF]"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="ml-2 bg-[#905FFF] p-2 rounded-full"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chat;
