import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there 👋\nHow can I help you today?", type: 'incoming' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatboxRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('show-chatbot');
        } else {
            document.body.classList.remove('show-chatbot');
        }
    }, [isOpen]);

    const handleSend = async () => {
        let userMessage = input.trim();
        if (!userMessage) return;

        setInput("");

        // Add user message
        const newMessages = [...messages, { text: userMessage, type: 'outgoing' }];
        setMessages(newMessages);
        setIsTyping(true);

        try {
            // Again assuming backend runs on 5000 and proxy is not setup yet
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage })
            });
            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Something went wrong!");

            const botMessage = data.response || data.message || "I didn't understand that.";
            setMessages((prev) => [...prev, { text: botMessage, type: 'incoming' }]);

        } catch (error) {
            let errorMsg = "Oops! Something went wrong. Please try again.";
            if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
                errorMsg = "Error: Cannot connect to server. Please ensure 'python app.py' is running.";
            }
            setMessages((prev) => [...prev, { text: errorMsg, type: 'incoming', isError: true }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <div className={`chatbot-floating-mascot ${isOpen ? 'hidden' : ''}`}>
                <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
                    alt="Robot Mascot"
                    width="60"
                    height="60"
                    className="chatbot-avatar"
                />
            </div>

            <button className="chatbot-toggler" onClick={toggleChat}>
                <span className="material-symbols-rounded">chat</span>
                <span className="material-symbols-outlined">close</span>
            </button>

            <div className="chatbot">
                <header>
                    <h2>Chat with us</h2>
                    <span className="close-btn material-symbols-outlined" onClick={toggleChat}>close</span>
                </header>
                <ul className="chatbox" ref={chatboxRef}>
                    {messages.map((msg, idx) => (
                        <li key={idx} className={`chat ${msg.type} ${msg.isError ? 'error' : ''}`}>
                            {msg.type === 'incoming' && <span className="material-symbols-outlined">smart_toy</span>}
                            <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                        </li>
                    ))}
                    {isTyping && (
                        <li className="chat incoming">
                            <span className="material-symbols-outlined">smart_toy</span>
                            <p>Thinking...</p>
                        </li>
                    )}
                </ul>
                <div className="chat-input">
                    <textarea
                        placeholder="Enter a message..."
                        spellCheck="false"
                        required
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    ></textarea>
                    <span id="send-btn" className="material-symbols-rounded" onClick={handleSend}>send</span>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
