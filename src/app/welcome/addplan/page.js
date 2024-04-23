"use client";
import React, { useState } from "react";
//import Food from "@/app/components/food";
import TodayPlan from "@/app/components/todays-plan";
import NavbarAuth from "@/app/components/navbarAuth";
import FoodList from "@/app/components/foodlist";
import AddFood from "@/app/components/AddFood";
import TitleList from "@/app/components/itemlist";


const ViewPlanHome = () => {


const [foods, setFoods] = useState([]);

  const addUserHandler = (foodInfo) => {
    setFoods((prev) => [...prev, foodInfo]);
  };

    return(

        <div>    
            
        <NavbarAuth />
        <TodayPlan />

       <AddFood OnAddFood={addUserHandler} />

        <FoodList items = {foods} />
</div>

    

    );
};

export default ViewPlanHome;