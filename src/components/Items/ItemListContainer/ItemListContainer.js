import React, { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
const useParams = require("react-router-dom").useParams;
function ItemListContainer() {
  const [itemList,setItemList] = useState([]);
  const { categoryId } = useParams();


  

  
  useEffect(() => {
      setTimeout(function(){ 
          //obtengo la data de un json con productos
          fetch('../mockData/productos.json'
          ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
          )
            .then(function(response){
              
              return response.json();
              })
              .then(function(fullCategoryList) {
                if(categoryId){
                  let category = fullCategoryList.filter( category => category.id === categoryId)[0]
                  if(category){
                    setItemList([...category.items]);          
                  }
                }
                else{
                  let fullList = [];
                  fullCategoryList.forEach(category => {
                    fullList = [...fullList,...category.items];
                  });
                  setItemList([...fullList]);          
                }
               
              });
           
        }, 2000);
     
  }, [categoryId]);
    


    return (
        <div className="marginBottom1">
           
           <ItemList itemsList={ itemList }/>
         
          
           {/* <ItemDetailContainer ></ItemDetailContainer>  solo para test*/}

        </div>)
}

export default ItemListContainer;