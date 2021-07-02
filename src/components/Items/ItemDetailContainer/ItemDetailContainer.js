import React, { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const [item,setItemDetail] = useState({});
  const mockItemDetail = { id:1, title : "Producto 1", description: "Este producto es un jarron dibujado", price: "10", pictureUrl:"https://cdn5.dibujos.net/dibujos/pintados/202008/una-flor-en-un-jarron-naturaleza-flores-11707997.jpg" } ;
  
  useEffect(() => {
    var miPromise = new Promise(function(resolve, reject) {
      setTimeout(function(){
          resolve(mockItemDetail); 
        }, 2000);
      });
      miPromise.then(function(item)  {
        setItemDetail(item);          
      });
  }, []);
    


    return (
        <div >
           <ItemDetail item = { item }/>
           
        </div>)
}

export default ItemDetailContainer;