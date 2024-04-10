import React from 'react';
import './items.css';

const items = props => {
    return (    
        <li key={props.id} className="meal-block-item">
             <h2>{props.title}</h2>
             <img src={props.img} className="meal-img" alt= "meal image" />
        <div className="meal-info">
            <p>Calories: {props.calories} cal</p>
            <p>Carbs: {props.carbs} g</p>
            <p>Protein: {props.protein} g</p>
        </div>
        </li>
    );
};

export default items;