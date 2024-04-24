import React, { useState } from 'react';
import axios from 'axios';

// Define the AddFood component
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={foodData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={foodData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Portion:</label>
          <input type="text" name="portion" value={foodData.portion} onChange={handleChange} required />
        </div>
        <div>
          <label>Calories:</label>
          <input type="text" name="calories" value={foodData.calories} onChange={handleChange} required />
        </div>
        <div>
          <label>Carbs:</label>
          <input type="text" name="carbs" value={foodData.carbs} onChange={handleChange} required />
        </div>
        <div>
          <label>Protein:</label>
          <input type="text" name="protein" value={foodData.protein} onChange={handleChange} required />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
