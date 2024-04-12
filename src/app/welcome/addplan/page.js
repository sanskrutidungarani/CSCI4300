"use client" // using client routing in next.js
import React, { useState } from 'react';
import HeaderAuth from "../../components/header-auth";
import FormTitle from "../../components/form-title"
import AddItemForm from "../../components/form-add-item";
import './add-plan.css';

const AddItem = () => {
    return(
      <div className='add-item'>
  
      <HeaderAuth />

      <h3>Create New Plan</h3>

      <FormTitle />

      <AddItemForm/>


      </div>
  );
};


export default AddItem;