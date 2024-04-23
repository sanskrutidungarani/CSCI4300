import React from 'react';
import '../styles/items.css';

const Meals =(props) => {
    return (    

    <div className='meal-item'>
   
        <li key={props.id}>
             <h2>{props.title}</h2>
             <img src={props.img} className="meal-img" alt= "meal image" />
        <div className="meal-info">
            <p>Calories: {props.calories} cal</p>
            <p>Carbs: {props.carbs} g</p>
            <p>Protein: {props.protein} g</p>
        </div>
            <button>View</button>
        </li>
    </div>


    );
};

export default Meals;