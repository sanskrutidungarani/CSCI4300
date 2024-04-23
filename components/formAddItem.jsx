"use client";

import React, { useState } from 'react';
import '../styles/form.css';

const formtitle = (props) => {
        const [newItem, setNewItem] = useState({
          Name: '',
          Portion: '',
          Calories: '',
          Carbs: '',
          Protein: ''
        });
      
        const handleChange = (event) => {
          setNewItem({ ...newItem, [event.target.name]: event.target.value });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          console.log('New meal plan:', newItem);
      
          setNewItem({ name: '', portion: '', calories: '', carbs: '', protein: '' });
        };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Food Name:</label>
            <input
                type="string"
                id="name"
                name="name"
                value={newItem.name}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="portion">Portion(1 cup, 100g, 1):</label>
            <input
                type="string"
                id="portion"
                name="portion"
                value={newItem.portion}
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

            <label htmlFor="carbs">Carbs(g):</label>
            <input
                type="number"
                id="carbs"
                name="carbs"
                value={newItem.carbs}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="protein">Protein(g):</label>
            <input
                type="number"
                id="protein"
                name="protein"
                value={newItem.protein}
                onChange={handleChange}
                required
            />
            <br />

            </form>

            <div className='flex-button'>
                <button >Add to Meal Plan</button>
                <button type='submit'>Done</button>
            </div>
        </div>
        );
    };


export default formtitle;