'use client'
import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/AddFoodForm.css';

const AddFood = () => {
  const [foodData, setFoodData] = useState({
    title: '',
    name: '',
    portion: '',
    calories: '',
    carbs: '',
    protein: ''
  });

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFoodData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Send the food data to the backend
      await axios.post('/api/foods', foodData); // Replace '/api/foods' with your actual backend endpoint
      // Optionally, update the local state or trigger a page refresh
      setFoodData({
        title: '',
        name: '',
        portion: '',
        calories: '',
        carbs: '',
        protein: ''
      });
      alert('Food added successfully!');
    } catch (error) {
      console.error('Error adding food:', error);
      alert('Failed to add food. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <input type="text" name="title" placeholder="Title" value={foodData.title} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" value={foodData.name} onChange={handleChange} />
        <input type="text" name="portion" placeholder="Portion" value={foodData.portion} onChange={handleChange} />
        <input type="text" name="calories" placeholder="Calories" value={foodData.calories} onChange={handleChange} />
        <input type="text" name="carbs" placeholder="Carbs" value={foodData.carbs} onChange={handleChange} />
        <input type="text" name="protein" placeholder="Protein" value={foodData.protein} onChange={handleChange} />
        <button className='button-add-food' type="submit">Submit plan</button>
      </form>
    </div>
  );
};

export default AddFood;
