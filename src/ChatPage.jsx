import React, { useEffect, useState, useRef } from "react";

// Simple avatar generator: returns a colored circle with initials
function Avatar({ name }) {
  const colors = ["bg-indigo-500","bg-purple-500","bg-blue-500","bg-pink-500"];
  const color = colors[name.length % colors.length];
  const initials = name.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2);
  return (
    <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center font-bold text-white shadow-md mr-2`}>
      {initials}
    </div>
  );
}

export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setMessages((old) => [
      ...old,
      {
        username,
        text: input,
        timestamp: Date.now(),
      },
    ]);
    setInput("");
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-4xl font-extrabold mb-6 text-indigo-800 drop-shadow-lg">Group Chat Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (username.trim()) setLoggedIn(true);
          }}
          className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 flex flex-col space-y-6"
        >
          <input
            className="border-2 border-indigo-300 rounded-lg px-4 py-3 text-lg focus:border-indigo-500 transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md text-lg hover:scale-105 transition-transform">
            Join Chat
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 px-2">
      <h2 className="text-3xl font-bold mb-6 text-indigo-800 drop-shadow-lg">Community Group Chat</h2>
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-4 h-[480px] overflow-y-auto border border-indigo-200">
        {messages.length === 0 && (
          <div className="text-center text-indigo-400 my-10">No messages yet, start the conversation!</div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className="flex items-end mb-5">
            <Avatar name={msg.username || "??"} />
            <div>
              <div className="flex items-center">
                <span className="font-semibold text-indigo-700">{msg.username}</span>
                <span className="ml-2 text-xs text-indigo-400">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 rounded-xl px-4 py-2 mt-1 text-indigo-900 shadow">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <form
        onSubmit={handleSend}
        className="w-full max-w-lg flex space-x-2"
      >
        <input
          className="flex-grow border-2 border-indigo-300 rounded-xl px-4 py-3 text-lg shadow focus:border-indigo-500 transition"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-xl text-lg transition-transform hover:scale-105">
          Send
        </button>
      </form>
    </div>
  );
            }
