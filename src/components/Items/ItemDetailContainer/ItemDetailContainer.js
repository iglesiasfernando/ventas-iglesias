import React, { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestone } from '../../../firebase'

const useParams = require("react-router-dom").useParams;

function ItemDetailContainer() {
  const [item,setItemDetail] = useState();
  const { itemId } = useParams();
  
  useEffect(() => {
    const db = getFirestone()
      const itemList = db.collection('items').where('id','==',itemId)
      itemList.get().then((query) => {
        let item = query.docs.map(doc => doc.data())[0]
        setItemDetail(item);    
      }).catch(err => {
        console.log('Error getting documents', err);
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