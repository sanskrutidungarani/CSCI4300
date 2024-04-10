import React from "react";
import Items from "items";
import Card from "card";



const ItemList = ({items}) => {
    return(
        <div>
            <Card className = "items">
            {items.map((item, index) => (
                <User
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