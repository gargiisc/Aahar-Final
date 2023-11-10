import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import BMI from "./components/RecipeSuggestion/Bmi";
import CalorieCalculator from "./components/Calorie/Calorie";
import SpeechToTextDiary from "./components/Journal/page";
import { auth } from "./firebase";
import "./App.css";




function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Bmi" element={<BMI />} />
          <Route path="/Calorie" element={<CalorieCalculator />} />
          {/* <Route path="/" element={<Blog />} /> */}
          
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/page" element={<SpeechToTextDiary />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
