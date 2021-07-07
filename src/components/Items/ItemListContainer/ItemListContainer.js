import React, { useState,useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
const useParams = require("react-router-dom").useParams;
function ItemListContainer() {
  const [itemList,setItemList] = useState([]);
  const { categoryId } = useParams();


  const onAdd = (cantidadVar) => {
    //setCantidad(0);
    alert("Se agregaron " + Number(cantidadVar)  +" elementos a tu compra")
  }

  
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
              .then(function(items) {
                let category = items.filter( category => category.id === categoryId)[0]
                if(category){
                  setItemList([...category.items]);          
                }
              });
           
        }, 2000);
     
  }, [categoryId]);
    


    return (
        <div className="marginBottom1">
           
           <ItemList itemsList={ itemList }/>
         
           <ItemCount initialStock={5} initial={0} onAdd={ onAdd}></ItemCount>
          
           {/* <ItemDetailContainer ></ItemDetailContainer>  solo para test*/}

        </div>)
}

export default ItemListContainer;