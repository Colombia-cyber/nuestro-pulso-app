import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-600 mb-4 drop-shadow-xl">
        Nuestro Pulso
      </h1>
      <p className="text-xl text-indigo-800 mb-10 font-medium">Community Platform for News, Debates, Events, and More.</p>
      <Link to="/chat">
        <button className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition-transform duration-200 hover:scale-105 text-xl">
          🚀 Join Chat
        </button>
      </Link>
    </div>
  );
}
