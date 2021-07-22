import React, { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestone } from '../../../firebase'
const useParams = require("react-router-dom").useParams;
function ItemListContainer() {
  const [itemList,setItemList] = useState([]);
  const { categoryId } = useParams();

 

  
  useEffect(() => {
    const db = getFirestone()
    let itemCollection = db.collection('items')

    if(categoryId){
      const itemList = itemCollection.where('categoryId','==',categoryId)
      itemList.get().then((query) => {
        setItemList(query.docs.map(doc => doc.data()));    
      })
      
    }
    else{
      itemCollection.get().then((query) => {
        setItemList(query.docs.map(doc => doc.data()));    
      })
    }
  }, [categoryId]);
    


    return (
        <div className="marginBottom1">
           
           <ItemList itemsList={ itemList }/>
         
          
           {/* <ItemDetailContainer ></ItemDetailContainer>  solo para test*/}

        </div>)
}

export default ItemListContainer;