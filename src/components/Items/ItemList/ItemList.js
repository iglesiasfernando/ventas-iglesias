import React from 'react';
import Item from '../Item/Item';


function ItemList({itemsList}) {
    return (
      <div className="grid">
        {
        itemsList.map(element => {
          
          return (<Item key={element.id} item={element}/>)
        })
        }
      </div>

        
     
    );
  }

  

  export default ItemList;