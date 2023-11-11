import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import './Scroll'
import Navbar from '../NavBar/Navbar';





function Home(props){

  return (
    <div>
      <Navbar/>
      

      {/* MainPage */}
      <div className="hero-section">
        <Link to=""></Link>
        <img className="image-icon" alt="" src="/image.gif" />
        <div className="container2">
          <div className="sub-container1">
            <div className="container3">
              <div className="sub-container2">
                <div className="container4">

                  <div className="heading"><h2>{props.name ? `Heyy... ${props.name}` : "Hellooo...Login to this page..."}</h2></div>
                </div>
                <b className="heading1"></b>
              </div>
              <div className="sub-container2">
                <div className="container4">

                  <div className="heading">Transform Your Health with ❤️</div>
                </div>
                <b className="heading1">Your Meal and Fitness Tracker</b>
              </div>
              <div className="paragraph">
                Welcome to Aahar, your partner in achieving optimal
                health. Start your
                transformation today.
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* FeaturesPage */}
      <div className="features-section">
        <div className="text-container">
          <b className="heading"><h1>Features</h1></b>
          <div className="paragraph">
            Welcome to the Feature Section of Aahar, your ultimate
            destination for all things nutrition and wellness.
          </div>
        </div>

        <div className="container6">
          <div className="items-container">
            <div className="card">
              <div className="container7">
                <div className="icon-container">
                  <img className="icon2" alt="" src="/icon2.svg" />
                </div>
                <div className="heading3">Calculate your BMI</div>
              </div>
              <div className="paragraph">
                Calculate your BMI i.e Body Mass Index and you will get to know how is the condition of your body.
              </div>
            </div>

            <div className="card1">
              <div className="container7">
                <div className="icon-container">
                  <img className="icon3" alt="" src="/icon3.svg" />
                </div>
                <div className="heading3">
                  Calorie Calculator
                </div>
              </div>
              <div className="paragraph">
                Here you will add your consumed food and it will calculate your calorie consumption
              </div>
            </div>
          </div>
          <div className="items-container">
            <div className="card1">
              <div className="container7">
                <div className="icon-container">
                  <img className="icon2" alt="" src="icon4.svg" />
                </div>
                <div className="heading3">Health Bot</div>
              </div>
              <div className="paragraph">
                Our healthbot will give you suggestions on recipes as well as answer all your diet reated queries.
              </div>
            </div>
            <div className="card1">
              <div className="container7">
                <div className="icon-container">
                  <img className="icon2" alt="" src="/icon5.svg" />
                </div>
                <div className="heading3">Journal</div>
              </div>
              <div className="paragraph">
                You can journal through here and our special feature to convert your voice to text will help you though your journey.
              </div>
            </div>
          </div>
          <div className="items-container">
            <div className="card1">
              <div className="container7">
                <div className="icon-container">
                  <img className="icon3" alt="" src="/community.svg" />
                </div>
                <div className="heading3">Community Page</div>
              </div>
              <div className="paragraph">
                You will liked to discord where you can chat with your friends, doctors
              </div>
            </div>
            <div className="card1">
              <div className="container7">
                <div className="icon-container">
                  <img className="icon7" alt="" src="/icon7.svg" />
                </div>
                <div className="heading3">
                  Blogs
                </div>
              </div>
              <div className="paragraph">
                Our blog page will help you making you...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="blogs-section">
        <div className="text-container">
          <b className="heading"><h1>Blogs</h1></b>
          <div className="paragraph">
            Our blog is a treasure trove of informative and engaging articles
            Dive deep into our blogs page and learn
          </div>
        </div>

        <div className="container13">
          <div className="sub-container7">

            <div className="card6">
              <img className="image-icon4" alt="" src="/Untitled.png" />
              <img />
              <div className="container14">
                <div className="text-container2">
                  <div className="text5">Weight Loss</div>
                  <div className="heading10">
                  <Link to="/Blog">The Benefits of Hydration for Weight Loss</Link>
                  </div>
                </div>
                <div className="paragraph9">
                  Discover how staying hydrated can support your weight loss
                  goals and improve overall health.
                </div>
                <div className="sub-container8">
                  <div className="container15">
                    <div className="text-container3">
                      <div className="text6">10 Nov 2023 - 5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card6">
              <img className="image-icon6" alt="" src="/Untitled3.png" />
              <div className="container14">
                <div className="text-container2">
                  <div className="text5">Understanding Macronutrients</div>
                  <div className="heading10">
                  <Link to="/Blog1">Carbohydrates, Proteins, and Fats</Link>
                  </div>
                </div>
                <div className="paragraph9">
                  Get a comprehensive understanding of macronutrients and their
                  role in your diet for optimal health and weight management.
                </div>
                <div className="sub-container8">
                  <div className="container15">
                    <div className="text-container3">
                      <div className="text6">10 Nov 2023 - 5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-container7">
            <div className="card6">
            <Link to="/Blog2"></Link>
              <img className="image-icon6" alt="" src="/Untitled1.png" />
              <div className="container14">
                <div className="text-container2">
                  <div className="text5">Mindful Eating</div>
                  <div className="heading10">
                  <Link to="/Blog2">Cultivating a Healthy Relationship with Food</Link>
                  </div>
                </div>
                <div className="paragraph9">
                  Learn how practicing mindful eating can help you develop a
                  healthier relationship with food and improve your overall
                  well-being.
                </div>
                <div className="sub-container8">
                  <div className="container15">
                    <div className="text-container3">
                      <div className="text6">10 Nov 2023 - 5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card6">
              <img className="image-icon6" alt="" src="/Untitled4.png" />
              <div className="container14">
                <div className="text-container2">
                  <div className="text5">Healthy Snacks on the Go</div>
                  <div className="heading10"> <Link to="/Blog2">Quick and Nutritious Options</Link></div>
                </div>
                <div className="paragraph9">
                  Explore a variety of convenient and healthy snack ideas to
                  keep you fueled throughout the day.
                </div>
                <div className="sub-container8">
                  <div className="container15">
                    <div className="text-container3">
                      <div className="text6">10 Nov 2023 - 5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}

      
      {/* <div className="footer-section">
        <img src="/Aahar logo.svg" alt="Company Logo" className="footer-logo" />
        <h2>AAHAR</h2>
      </div>
      <div className="footer-section">
        <h2>Company</h2>
        <ul>
          <li>About</li>
          <li>Why Aahar</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact us</h2>
        <ul>
          <li>About</li>
          <li>Why Aahar</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Meet us</h2>
        <ul>
          <li>About</li>
          <li>Why Aahar</li>
          <li>Career</li>
        </ul>
      </div> */}
    




    </div>
  );
}

export default Home;
