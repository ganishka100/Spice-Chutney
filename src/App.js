import './App.css';
import FoodItems from './Components/FoodItems';
import Container from './Components/Container';
import ErrorMsg from './Components/ErrorMsg';
import Input from './Components/Input';
import { useState } from 'react';

function App() {

  // let foodItems = ["WaterBalls","Pattiz","Burger","Noodles","IceCream"]

  // let foodItems = [];

   let [foodItems, setFoodItems] = useState([])

   const handleOnKeyDown = (event) =>{
     if(event.key === "Enter"){
       let newFoodItem = event.target.value;
       event.target.value = "";
       let newItems = [...foodItems, newFoodItem];
       setFoodItems(newItems);
     }
   }

  return (
    <>
   <Container>
    <h3 className='text-center text-white fw-bold mb-5'>Spice & Chutney
    <span><lord-icon src="https://cdn.lordicon.com/cwhyhhho.json" trigger="hover"
   style={{width:"60px", height:"60px"}}>
</lord-icon></span></h3>
    <Input handleOnKeyDowned={handleOnKeyDown}/>
    <ErrorMsg fItems={foodItems}/>
     <FoodItems fItems={foodItems}/>
    </Container>
    </>   
  );
}

export default App;
