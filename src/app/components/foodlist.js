import React from "react";
import Food from "./food";
import Card from "./card";
import '../styles/itemslist.css';



const ItemList = ({items}) => {
    return(
        <div>
      
            {items.map((item, index) => (
                <Food
                    key={index}
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

export default ItemList;