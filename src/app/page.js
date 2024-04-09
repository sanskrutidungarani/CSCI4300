"use client";

import React from "react";
import Header from "./components/navbar.js";
import NavBar from "./components/navbar.js"

import './home-unauth.css';


export default function Home() {
  return (
      <div>
       <Header />
        <div className = "flex-container">
            <div className="flex-container-right">
                <h3>Find Out Exactly What Is In Your Meals</h3>
                <p>as a college student you deserve to know the nutrition of your food</p>
            </div>

            <div className="flex-container-left">
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/burrito-bowl_1-98b797e.jpg?quality=90&webp=true&resize=500,454 "  alt = "tasty meal" />
            </div>


        </div>

      </div>

  );
}