import React, { useState } from 'react';
import ListItems from './ListItems';

function FoodItems({fItems}) {

  let [activeItems, setActiveItems] = useState([]);

  // let onBuyButton = (currentItem) =>{
  //     let newItems = [...activeItems, currentItem];
  //     setActiveItems(newItems);
  // }

  let onBuyButton = (currentItem) => {
    let newItems;
    if (activeItems.includes(currentItem)) {
      newItems = activeItems.filter(item => item !== currentItem);
    } else {
      newItems = [...activeItems, currentItem];
    }
    setActiveItems(newItems);
  }
  
  return (
    <>
       <ul className="list-group">
         {fItems.map((currentItem) =>(
           <ListItems key={currentItem} cItem={currentItem} bought={activeItems.includes(currentItem)} handleButton={(event) =>{
              return onBuyButton(currentItem,event)
           }}/>
          
         ))}
        
       </ul>
    </>
  )
}
export default FoodItems;