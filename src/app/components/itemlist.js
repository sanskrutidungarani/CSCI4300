import React from "react";
import Meals from "./items";
import Card from "./card";
import './itemslist.css';



const ItemList = ({items}) => {
    return(
        <div>
            <Card className = "items">
            {items.map((item, index) => (
                <Meals
                    key={index}
                    title={item.title} 
                    calories={item.calories}
                    img={item.img}
                    carbs={item.carbs}
                    protein={item.protien}
                />
            ))}
            </Card>
        </div>
    );
};

export default ItemList;