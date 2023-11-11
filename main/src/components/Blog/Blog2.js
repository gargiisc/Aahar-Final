import React, { Component } from 'react'
import "./Blog.css"
import Navbar from '../NavBar/Navbar';

export class Blog2 extends Component {
  render() {
    return (
      <div className='blog'>
        <Navbar />

        <div className="blog-inner">
          <div className='h2'><h2>Cultivating a Healthy Relationship with Food</h2></div>
          <img className="frame-child" alt="" src="/Untitled1.png" />
        </div>
        <div className="health-food-refers-container">
          <p className="health-food-refers">
          Cultivating a healthy relationship with food involves adopting mindful and intuitive 
          eating practices. By savoring each bite and paying attention to hunger and fullness cues, 
          individuals can develop a more profound connection with their bodies. 
          </p>
          <p className="health-food-refers"></p>
          <p className="health-food-refers">
          Beyond its impact on satiety, adequate hydration is essential for maintaining an 
          optimal metabolism. A well-hydrated body functions more efficiently, facilitating 
          the smooth operation of metabolic processes crucial for burning calories effectively. 
          </p>
          <p className="health-food-refers"></p>
        </div>
        <div className="lean-proteins-like-container">
          <p className="health-food-refers">
            Lean proteins like poultry, fish, and plant-based alternatives like
            tofu and legumes supply essential amino acids for muscle growth and
            repair. Healthy fats from sources like avocados, nuts, and olive oil
            are integral for brain health and regulating cholesterol levels.
          </p>
          <p className="health-food-refers"></p>
          <p className="health-food-refers">
            It's crucial to limit processed foods, which are often laden with
            unhealthy trans fats, excessive salt, and added sugars. Reducing these
            can help reduce the risk of obesity, heart disease, and diabetes.
          </p>
          <p className="health-food-refers"></p>
          <p className="health-food-refers">
            Balancing portion sizes and maintaining hydration are also key to a
            healthy diet. Staying hydrated with water and herbal teas is essential
            for overall well-being.
          </p>
          <p className="health-food-refers"></p>
          <p className="health-food-refers">
            Incorporating a variety of these health foods into your daily meals
            can lead to improved energy levels, better weight management, and a
            decreased risk of many chronic diseases, ultimately contributing to a
            long and healthy life.
          </p>
        </div>

      </div>
    )
  }
}

export default Blog2