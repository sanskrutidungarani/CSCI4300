import React from "react";
import Title from "./items";
import Card from "./card";
import '../styles/itemslist.css';



const ItemList = ({items}) => {
    return(
        <div>

            {items.map((item, index) => (
                <Title
                    key={index}
                    title={item.title} 
                    img={item.img}
                />
            ))}
        </div>
    );
};

export default ItemList;