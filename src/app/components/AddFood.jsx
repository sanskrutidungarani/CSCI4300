
import React, { useState } from 'react';
import Button from './button';
import '../styles/form.css';


const AddFood = ({OnAddFood}) => {

        const [newItem, setNewItem] = useState({
          title: '',
          img: '',
          name: '',
          portion: '',
          calories: '',
          carbs: '',
          protein: ''
        });
      
        const handleChange = (event) => {
            const { name, value } = event.target;
            setNewItem(prevState => ({
              ...prevState,
              [name]: value
            }));
          };
    
      
        const handleSubmit = (event) => {
          event.preventDefault();
          
          if (newItem.name.trim() === '') {
            return;
          }
          console.log('New meal plan:', newItem);

          OnAddFood(newItem);
      
          setNewItem({ name: '', portion: '', calories: '', carbs: '', protein: '' });
        };

    return(
        <div>
            <form onSubmit={handleSubmit}>

            <label >Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={newItem.title}
                onChange={handleChange}
                required
            
            />
            <br />

            <label >Image Link:</label>
            <input
                type="text"
                id="image"
                name="image"
                value={newItem.img}
                onChange={handleChange}
         
            />
            <br />
            <label>Food Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={newItem.name}
                onChange={handleChange}
                required
             
            />
            <br />

            <label >Portion(1 cup, 100g, 1):</label>
            <input
                type="text"
                id="portion"
                name="portion"
                value={newItem.portion}
                onChange={handleChange}
            
            />
            <br />
   
            <label >Calories:</label>
            <input
                type="number"
                id="calories"
                name="calories"
                value={newItem.calories}
                onChange={handleChange}
            
            />
            <br />

            <label>Carbs(g):</label>
            <input
                type="number"
                id="carbs"
                name="carbs"
                value={newItem.carbs}
                onChange={handleChange}
              
            />
            <br />
            <label >Protein(g):</label>
            <input
                type="number"
                id="protein"
                name="protein"
                value={newItem.protein}
                onChange={handleChange}
              
            />
            <br />
            <div className='flex-button'>
               <Button type="submit">Add Food</Button>
            </div>

            </form>

           
        </div>
        );
    };


export default AddFood;