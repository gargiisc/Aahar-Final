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
import Blog from "./components/Blog/Blog";
import Blog1 from "./components/Blog/Blog1";
import Blog2 from "./components/Blog/Blog2";
import Blog3 from "./components/Blog/Blog3";






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
          <Route path="/page" element={<SpeechToTextDiary />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog1" element={<Blog1 />} />
          <Route path="/Blog2" element={<Blog2 />} />
          <Route path="/Blog3" element={<Blog3 />} />
          <Route path="/" element={<Home name={userName} />} />
          
          

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
