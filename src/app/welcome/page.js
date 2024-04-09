"use client";

import React from "react";
import NavBar from "../components/navbar2";
import Meals from "../components/items";
import Button from "../components/button";


export default function Home() {
  return (

      <div className="home-flex-container">
       <NavBar />

       <Button />
      
        <Meals 
        title = "meal plan 1"
        img = "https://dining.uga.edu/_resources/images/snelling_400x267.png"
        calories = "1500"
        carbs = "56"
        protein = "128"
        />

        <Meals 
        title = "meal plan 2"
        img = "https://dining.uga.edu/_resources/images/WT_Bolton-736_400x267.jpg"
        calories = "110"
        carbs = "56"
        protein = "138"
        />

        <Meals 
        title = "meal plan 3"
        img = "https://dining.uga.edu/_resources/images/3828-03_400px.jpg"
        calories = "2759"
        carbs = "36"
        protein = "18"
        />

   
      </div>




  );
}