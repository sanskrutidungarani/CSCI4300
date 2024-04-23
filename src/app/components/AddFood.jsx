
import React, { useState } from 'react';
import Button from './button';
import '../styles/form.css';


const AddFood = ({OnAddFood}) => {

        const [newItem, setNewItem] = useState({
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
          
          if (newItem.name.trim() === '' || newItem.portion.trim() === '') {
            return;
          }
          console.log('New meal plan:', newItem);

          OnAddFood(newItem);
      
          setNewItem({ name: '', portion: '', calories: '', carbs: '', protein: '' });
        };

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
                required
            />
            <br />
   
            <label >Calories:</label>
            <input
                type="number"
                id="calories"
                name="calories"
                value={newItem.calories}
                onChange={handleChange}
                required
            />
            <br />

            <label>Carbs(g):</label>
            <input
                type="number"
                id="carbs"
                name="carbs"
                value={newItem.carbs}
                onChange={handleChange}
                required
            />
            <br />
            <label >Protein(g):</label>
            <input
                type="number"
                id="protein"
                name="protein"
                value={newItem.protein}
                onChange={handleChange}
                required
            />
            <br />
            <div className='flex-button'>
               <Button type="submit">Add Food</Button>
                <br/> <br/>
               <Button type="submit">Done</Button>
            </div>

            </form>

           
        </div>
        );
    };


export default AddFood;