import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({greeting}) {
  const [cantidad,setCantidad] = useState(0);
  const onAdd = (cantidadVar) => {
    setCantidad(0);
    alert("Se agregaron " + Number(cantidadVar)  +" elementos a tu compra")
  }
    return (
        <div>
            {greeting}

           <ItemCount initialStock="5" initial={cantidad} onAdd={ onAdd}></ItemCount>
          
        </div>)
}

export default ItemListContainer;