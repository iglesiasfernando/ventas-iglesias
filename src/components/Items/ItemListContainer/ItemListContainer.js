import React, { useState,useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
  const [cantidad,setCantidad] = useState(0);
  const [itemList,setItemList] = useState([]);
  const tempItemList = [{ id:1, title : "Producto 1", description: "Descripcion 1", price: "10", pictureUrl:"https://cdn5.dibujos.net/dibujos/pintados/202008/una-flor-en-un-jarron-naturaleza-flores-11707997.jpg" },{ id:2, title : "Producto 2", description: "Descripcion 2", price: "20", pictureUrl:"https://cdn5.dibujos.net/dibujos/pintados/202008/una-flor-en-un-jarron-naturaleza-flores-11707997.jpg" },{ id:3, title : "Producto 3", description: "Descripcion 3", price: "30", pictureUrl:"https://cdn5.dibujos.net/dibujos/pintados/202008/una-flor-en-un-jarron-naturaleza-flores-11707997.jpg" },{ id:4, title : "Producto 4", description: "Descripcion 4", price: "40", pictureUrl:"https://cdn5.dibujos.net/dibujos/pintados/202008/una-flor-en-un-jarron-naturaleza-flores-11707997.jpg" } ];

  const onAdd = (cantidadVar) => {
    setCantidad(0);
    alert("Se agregaron " + Number(cantidadVar)  +" elementos a tu compra")
  }

  
  useEffect(() => {
    var miPromise = new Promise(function(resolve, reject) {
      setTimeout(function(){
          resolve(tempItemList); 
        }, 2000);
      });
      miPromise.then(function(items)  {
        setItemList([...items]);          
      });
  }, []);
    


    return (
        <div className="marginBottom1">
           
           <ItemList itemsList={ itemList }/>
           
         

           <ItemCount initialStock="5" initial={cantidad} onAdd={ onAdd}></ItemCount>
          
        </div>)
}

export default ItemListContainer;