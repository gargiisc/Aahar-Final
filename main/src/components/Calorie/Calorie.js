"use client"
import React, { useState } from 'react';
import './CalorieCalculator.css'; 
import Navbar from '../NavBar/Navbar';

const CalorieCalculator = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState(null);

  const foodData = {
    apple: 95,
    banana: 105,
    chicken: 335,
    pizza: 285,
    salad: 150,
    burger: 250,
    iceCream: 137,
    coffee: 2,
    pasta: 200,
    rice: 205,
    salmon: 206,
    eggs: 68,
    orange: 62,
    avocado: 234,
    cheese: 113,
    chocolate: 152,
    bread: 80,
    yogurt: 150,
    carrot: 41,
    broccoli: 31,
    watermelon: 46,
    grapes: 69,
    potato: 161,
    shrimp: 84,
    steak: 250,
    spinach: 23,
    blueberries: 85,
    oatmeal: 150,
    almond: 7,
    peanutButter: 94,
    milk: 103,
    beer: 154,
    wine: 123,
    soda: 150,
    oatmeal: 68,
    scrambledEggs: 155,
    wholeWheatToast: 74,
    bananaPancakes: 94,
    greekYogurt: 59,
    fruitSmoothie: 90,
    avocadoToast: 120,
    bagelWithCreamCheese: 240,
    cerealWithMilk: 200,
    baconAndEggs: 268,
    granola: 113,
    frenchToast: 159,
    omelette: 94,
    porridge: 68,
    sausageAndBiscuits: 470,
    hashBrowns: 326,
    breakfastBurrito: 300,
    muffin: 220,
    croissant: 231,
    waffle: 82,
    yogurtParfait: 160,
    englishMuffinWithJam: 120,
    pancakes: 227,
    cinnamonRoll: 300,
    breakfastWrap: 250,
    smokedSalmonBagel: 360,
    toastWithJam: 74,
    peanutButterToast: 180,
    quinoaBowl: 222,
    shakshuka: 140,
    smoothieBowl: 120,
    nutellaCrepe: 330,
    breakfastTacos: 180,
    biscuitsAndGravy: 320,
    chickenCurry: 350,
    vegetableBiryani: 350,
    dalTadka: 175,
    paneerTikka: 70,
    chole: 250,
    alooGobi: 175,
    tandooriRoti: 125,
    chickenBiryani: 450,
    samosa: 125,
    fishCurry: 250,
    masalaDosa: 350,
    rajma: 250,
    gulabJamun: 175,
    palakPaneer: 300,
    pakora: 65,
    butterChicken: 400,
    bhindiMasala: 150,
    butterNaan: 200,
    idliSambar: 150,
    bhelPuri: 180,
    kheer: 200,
    vadaPav: 300,
    dosa: 150,
    bisiBeleBath: 300,
    rasgulla: 150,
    muttonCurry: 400,
    jalebi: 250,
    lassi: 120,
    pavBhaji: 300,
    chanaMasala: 200,
    paneerButterMasala: 350,
    kulfi: 180,
    korma: 300,
    dumAloo: 200,
    pulao: 250,
    masoorDal: 150,
    shahiTukda: 250,
    misalPav: 350,
    raita: 80,
    alooParatha: 250,
    matarPaneer: 300,
    bhature: 200,
    chickenTikkaMasala: 380,
    thali: 500,
    moongDalHalwa: 300,
    jeeraRice: 180,
    gajarKaHalwa: 250,
    chickenKorma: 350,
    methiThepla: 120,
    pizza: 285,
    sushi: 300,
    spaghettiBolognese: 400,
    caesarSalad: 200,
    tacos: 250,
    chocolateFondue: 150,
    padThai: 350,
    lasagna: 450,
    clubSandwich: 350,
    mangoStickyRice: 220,
    sushiBurrito: 400,
    chickenQuesadilla: 300,
    
    
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value.toLowerCase());
  };

  const calculateCalories = () => {
    if (foodData.hasOwnProperty(food)) {
      setCalories(foodData[food]);
    } else {
      setCalories(null);
    }
  };

  return (
    <div className="calorie-calculator-container">
      <Navbar/>
      <div className="calorie-calculator-box">
        <h1>Calorie Calculator</h1>
        <label>
          Enter the food you are eating:
          <input
            type="text"
            value={food}
            onChange={handleFoodChange}
            className="calorie-calculator-input"
          />
        </label>
        <button onClick={calculateCalories} className="calorie-calculator-button">
          Calculate Calories
        </button>
        {calories !== null && (
          <p className="calorie-calculator-result">
            {food.charAt(0).toUpperCase() + food.slice(1)} contains {calories} calories.
          </p>
        )}
        {calories === null && food !== '' && (
          <p className="calorie-calculator-result">
            Calories for {food} are not available in the dataset.
          </p>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;

