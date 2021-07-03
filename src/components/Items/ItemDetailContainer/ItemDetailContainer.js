import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const [item,setItemDetail] = useState();
  const { itemId } = useParams();
  
  useEffect(() => {
    var miPromise = new Promise(function(resolve, reject) {
      setTimeout(function(){
        fetch('../mockData/productos.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        )
          .then(function(response){
            
            return resolve(response.json())
          })
        }, 2000);
      });
      miPromise.then(function(categoryList)  {
        //esta busqueda es ineficiente pero es solo para la mock data
        const categorySearch = categoryList.find(category => category.items.find(item => item.id == itemId) !== undefined);
        const item = categorySearch.items.find(item => item.id == itemId);
        if(item){
          setItemDetail(item);          

        }
      });
  }, [itemId]);
    

   
    return (
      
        <div  > 
          { 
          // no muestro el itemDetail si el item esta en null 
        }
           { item ? <ItemDetail item = { item }/> : null}
           
        </div>)
}

export default ItemDetailContainer;