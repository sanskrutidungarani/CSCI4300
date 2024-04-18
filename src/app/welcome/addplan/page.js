"use client" // using client routing in next.js
import React, { useState } from 'react';
import HeaderAuth from "../../components/header-auth";
import FormTitle from "../../components/form-title"
import AddItemForm from "../../components/form-add-item";

import ViewPlan from '@/app/components/view-plan';
import './add-plan.css';






const AddItem = () => {

  const[itemNum, setItemNum] = useState(1);



const addFood = () => {
  setItemNum(itemNum + 1);
}



    return(
      <div className='add-item'>
  
      <HeaderAuth />

      <h3>Create New Plan</h3>

      <FormTitle />

      <h2>food #{itemNum}</h2>

      <AddItemForm/>

  

      <hr/>

  

      <ViewPlan 
        title = "meal plan 1"
        name = "apple"
        portion = "1"
        calories = "95"
        carbs = "25"
        protien = "1"
        />


      </div>
  );
};


export default AddItem;