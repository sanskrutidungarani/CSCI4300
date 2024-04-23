import React from "react";
import Meals from "./items";
import Card from "./card";




const ItemList = ({items}) => {
    return(
        <div>
            <Card>
            {items.map((item, index) => (
                <Meals
                    key={index}
                    title={item.title} 
                    img={item.img}
                />
            ))}
            </Card>
        </div>
    );
};

export default ItemList;