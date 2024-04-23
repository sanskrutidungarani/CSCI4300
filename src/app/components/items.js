import React from 'react';
import '../styles/items.css';

const Meals =(props) => {
    return (    

    <div className='meal-item'>
   
        <li key={props.id}>
             <h2>{props.title}</h2>
             <img src={props.img} className="meal-img" alt= "meal image" />
       
            <button>View</button>
        </li>
    </div>


    );
};

export default Meals;