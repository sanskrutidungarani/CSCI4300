import React from "react";
import Food from "./food";
import Card from "./card";
import '../styles/foodlist.css';



const FoodList = ({items}) => {
    return(
        <div>
            {items.map((item, index) => (
                <Food
                    key={index}
                    title = {item.title}
                    name={item.name} 
                    portion = {item.portion}
                    calories={item.calories}
                    carbs={item.carbs}
                    protein={item.protein}
                />
         
            ))}
            <hr/>
        </div>
    );
};

export default FoodList;