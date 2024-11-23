import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React, { useState } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState(""); // Manages the current light state
  const [message, setMessage] = useState("Welcome to our traffic management system");

  const handleLightChange = (color) => {
    setLight(color);
    switch (color) {
      case "red":
        setMessage("Stop");
        break;
      case "yellow":
        setMessage("Wait");
        break;
      case "green":
        setMessage("Go");
        break;
      default:
        setMessage("Welcome to our traffic management system");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-2">{message}</h1>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleLightChange("red")}
          className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700 transition`}
        >
          Red
        </button>
        <button
          onClick={() => handleLightChange("yellow")}
          className={`px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 transition`}
        >
          Yellow
        </button>
        <button
          onClick={() => handleLightChange("green")}
          className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition`}
        >
          Green
        </button>
      </div>
      <div className={`w-24 h-24 mt-6 rounded-full border-4 ${
        light === "red"
          ? "bg-red-500"
          : light === "yellow"
          ? "bg-yellow-500"
          : light === "green"
          ? "bg-green-500"
          : "bg-gray-300"
      }`}>
      </div>
    </div>
  );
};

export default TrafficLight;
