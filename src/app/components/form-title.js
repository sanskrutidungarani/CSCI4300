"use client"; // using client routing in next.js
import React, { useState } from 'react';
import "./form.css";

const formtitle = () => {
        const [newItem, setNewItem] = useState({
         Title: '',
         Img: ''
        });
      
        const handleChange = (event) => {
          setNewItem({ ...newItem, [event.target.name]: event.target.value });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          console.log('New meal plan:', newItem);
      
          setNewItem({ image: '', title: '' });
        };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="string"
                id="title"
                name="title"
                value={newItem.title}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="image">Image Link:</label>
            <input
                type="link"
                id="image"
                name="image"
                value={newItem.img}
                onChange={handleChange}
                required
            />
            <br />

            </form>
        </div>
        );
    };


export default formtitle;