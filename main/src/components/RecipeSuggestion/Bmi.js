"use client"
import React, { useState } from 'react';
import axios from 'axios';
import "./Bmi.css";
import Navbar from '../NavBar/Navbar';



const BMI = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBmi(weight / Math.pow(height / 100, 2));
    const response = await axios.get(
      //   `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&offset=0&number=5&apiKey=14aaedde20204bc2b3ee4e75fdb682a7`
      `https://api.edamam.com/search?q=chicken&app_id=e9ba71dd&app_key=58bfe63a5b6249c21829281908ca4965&health=${getHealthLabel()}`

    );
    setRecipes(response.data.hits);
  };

  const getHealthLabel = () => {
    if (bmi < 18.5) {
      return 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'normal';
    } else if (bmi >= 25 && bmi < 30) {
      return 'overweight';
    } else {
      return 'obese';
    }
  };

  return (
    <div>
      <Navbar/>
      <div class="heading">
        <h2>Calculate your BMI Today!!</h2></div>


      <div class="BMI">
        <form onSubmit={handleSubmit}>
          <div class="gender">
            <label>
              Gender:
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label></div>
          <div class="height">
            <label>
              Height(cm):
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label></div>
          <div class="weight">
            <label>
              Weight(kg):
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label></div>

          <label>
            <div class="age">
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div> </label>
          <button class="submit" type="submit">Calculate</button>
        </form>
        <h2>Your BMI is: {bmi}</h2>
        <h2>Your health status is {getHealthLabel()}</h2>
      </div>


    </div>
  );
};

export default BMI;
