"use client" // using client routing in next.js
import React, { useState } from 'react';
import './add-plan.css';
import NavBar from "../components/navbar2";

const AddItem = () => {
  const [newItem, setNewItem] = useState({
    image: '',
    title: '',
    calories: '',
    carbs: '',
    protein: '',
  });

  const handleChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('New meal plan:', newItem);

    setNewItem({ image: '', title: '', calories: '', carbs: '', protein: '' });
  };

  return (
    <div><NavBar />
      <form onSubmit={handleSubmit}>

        <label htmlFor="calories">Title:</label>
        <input
          type="string"
          id="title"
          name="title"
          value={newItem.title}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="image">Image:</label>
        <input
          type="link"
          id="image"
          name="image"
          value={newItem.calories}
          onChange={handleChange}
          required
        />
        <br />


        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={newItem.calories}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="carbs">Carbs:</label>
        <input
          type="number"
          id="carbs"
          name="carbs"
          value={newItem.carbs}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="protein">Protein:</label>
        <input
          type="number"
          id="protein"
          name="protein"
          value={newItem.protein}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Add Meal Plan</button>
      </form>
    </div>
  );
};


export default AddItem;