'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddMealButton from '../../components/addMealButton.jsx'

interface FoodItem {
  title: string;
  name: string;
  // Add other properties as needed
}

export default function Meals() {
  const [foods, setFoods] = useState<FoodItem[]>([]); // Specify the type as an array of FoodItem

  useEffect(() => {
    // Fetch user data, including food information, from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace '/api/user' with your actual backend endpoint
        const userData = response.data;
        setFoods(userData.foods); // Assuming userData contains food information
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>All Meal Plans</h1>
      <AddMealButton />
      <div>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              <p>Title: {food.title}</p>
              <p>Name: {food.name}</p>
              {/* Render other food information properties */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
