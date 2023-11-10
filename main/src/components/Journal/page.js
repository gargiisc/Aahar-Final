// "use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';

const SpeechToTextDiary = () => {
  const [isListening, setIsListening] = useState(false);
  const [entry, setEntry] = useState('');
  const [storedEntries, setStoredEntries] = useState([]);

  let recognition = null;

  useEffect(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    if (savedEntries) {
      setStoredEntries(JSON.parse(savedEntries));
    }
  }, []);

  const startListening = () => {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.onstart = () => {
      setIsListening(true);
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setEntry(entry + transcript);
    };
    recognition.onend = () => {
      setIsListening(false);
      saveDiaryEntry(entry);
    };

    recognition.start();
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const saveDiaryEntry = (text) => {
    if (text) {
      const updatedEntries = [...storedEntries, text];
      setStoredEntries(updatedEntries);
      setEntry('');
      localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100  text-gray-800 p-8">
        <Navbar/>
      <div className="max-w-lg mx-auto p-4 rounded-lg bg-white bg-opacity-20 backdrop-blur-md shadow-lg text-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-center">Voice into Your Journal</h1>
        <button
          onClick={isListening ? stopListening : startListening}
          className={`py-2 px-4 rounded-md ${
            isListening ? 'bg-red-500' : 'bg-gray-800'
          } text-white font-semibold hover:bg-opacity-80 te`}
        >
          {isListening ? 'Stop Recording' : 'Start Recording'}
        </button>
        <p className="my-4">{entry}</p>
        <div>
          <h2 className="text-xl font-semibold mb-2"> Your text here</h2>
          <ul className="list-disc pl-4">
            {storedEntries.map((entry, index) => (
              <li key={index} className="mb-2">{entry}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    
  );
};

export default SpeechToTextDiary;
