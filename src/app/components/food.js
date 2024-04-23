import React from "react";
import "../styles/foodlist.css"


const Food = (props) => {
    return(

         <li key={props.id} className="view-plan">
         <h2>{props.title}</h2>
        <div className="food-info">
            <h1>{props.name}</h1>
            <p>Portion: {props.portion}</p>
            <p>Calories: {props.calories} cal</p>
            <p>Carbs: {props.carbs} g</p>
            <p>Protein: {props.protein} g</p>

            <button type="submit">Remove</button>
        </div>
        </li>

    );
};

export default Food;