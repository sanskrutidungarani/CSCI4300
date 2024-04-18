import React from "react";
import "../components/view-plan.css"


const ViewPlan = (props) => {
    return(
        <div className="view-plan">
         <li key={props.id}>
             <h2>{props.title}</h2>
        <div className="food-info">
            <h1>{props.name}</h1>

            <p>Portion: {props.portion}</p>
            <p>Calories: {props.calories} cal</p>
            <p>Carbs: {props.carbs} g</p>
            <p>Protien: {props.protien} g</p>

            <button>Remove</button>
        </div>
        </li>
        </div>
    );
};

export default ViewPlan;