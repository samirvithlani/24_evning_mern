import React, { useState, useEffect,useRef } from "react";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    // Check for browser support
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

    // Create an instance of SpeechRecognition
    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true; // Keep listening
    recognition.current.interimResults = true; // Show interim results

    recognition.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setText(transcript);
    };

    recognition.current.onend = () => {
      setIsListening(false); // Stop listening
    };

    recognition.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  }, []);

  const startListening = () => {
    if (recognition.current) {
      recognition.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Speech to Text</h2>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{text}</p>
    </div>
  );
};

export default SpeechToText;
