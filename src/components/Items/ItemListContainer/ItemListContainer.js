import React, { useState,useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [itemList,setItemList] = useState([]);
  const { categoryId } = useParams();


  const onAdd = (cantidadVar) => {
    //setCantidad(0);
    alert("Se agregaron " + Number(cantidadVar)  +" elementos a tu compra")
  }

  
  useEffect(() => {
    var miPromise = new Promise(function(resolve, reject) {
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
              return resolve(response.json())
            })

           
        }, 2000);
      });
      miPromise.then(function(items)  {
        //aplico el filtro client side porque es mock data
        let category = items.filter( category => category.id == categoryId)[0]
        if(category){
          setItemList([...category.items]);          
        }
      });
  }, [categoryId]);
    


    return (
        <div className="marginBottom1">
           
           <ItemList itemsList={ itemList }/>
         
           <ItemCount initialStock={5} initial={0} onAdd={ onAdd}></ItemCount>
          
           {/* <ItemDetailContainer ></ItemDetailContainer>  solo para test*/}

        </div>)
}

export default ItemListContainer;