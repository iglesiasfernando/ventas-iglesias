import React, { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../../firebase'
const useParams = require("react-router-dom").useParams;
function ItemListContainer() {
  const [itemList,setItemList] = useState([]);
  const { categoryId } = useParams();

 

  
  useEffect(() => {
    const db = getFirestore()
    let itemCollection = db.collection('items')

    if(categoryId){
      const itemList = itemCollection.where('categoryId','==',categoryId)
      itemList.get().then((query) => {
        setItemList(query.docs.map((doc) =>{
          let data = doc.data()
          data["serverId"] = doc.id
          return data
        }
        ))
      })
    }
    else{
      itemCollection.get().then((query) => {
        setItemList(query.docs.map((doc) =>{
          let data = doc.data()
          data["serverId"] = doc.id
          return data
        }
        ));    
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