import React from 'react';


const Meals =(props) => {
    return (    

    <div className='meal-item'>
   
        <li key={props.id}>
             <h2>{props.title}</h2>
        </li>
    </div>


    );
};

export default Meals;