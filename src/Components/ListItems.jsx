import React from 'react';

function ListItems({cItem, handleButton, bought}) {
  return (
    <div>
         <li className={`list-group-item ${bought && 'boom'}`}>{cItem}
         <button className='btn bg-black text-white float-end btn-buy' onClick={handleButton}>Buy
         <span><lord-icon src="https://cdn.lordicon.com/tswnhcwg.json" trigger="hover"></lord-icon></span>
         </button>
         </li>
       
    </div>
  )
}

export default ListItems
