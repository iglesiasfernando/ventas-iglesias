import React, { useState } from 'react';


function ItemCount({stock : initialStock,initial,onAdd}) {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [count, setCount] = useState(initial);
    const [stock, setStock] = useState(initialStock);

    const addCount = () =>
    {
      if(stock > 0){
        var stockAux = stock;
        setCount(10);
        setStock(initialStock ++);
      }
    }

    const subtractCount = () =>
    {
      if(count > 0){
        setCount(count --);
        setStock(stock ++);
      }
    }

    return (
      <div>
          <button onClick={ subtractCount}>-</button>
          {count}
          <button onClick={ addCount }>+</button>

          <button onClick= { onAdd } >Agregar al carrito</button>
        </div>
     
    );
  }

  

  export default ItemCount;