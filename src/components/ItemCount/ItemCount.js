import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function ItemCount({initialStock,initial,onAdd}) {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [count, setCount] = useState(Number(initial));
    const [newStock, setStock] = useState(Number(initialStock));

    const addCount = () => {
      //let tempStock = newStock;   
      if(newStock > 0){
       // var count = count;
        //var myStock = stock;
        setCount(count + 1);
        setStock(newStock -1);
      }
    }

    const subtractCount = () =>
    {
      if(count > 0){
        setCount(count - 1);
        setStock(newStock + 1);
      }
    }

    const addSale = () => {
      if(count > 0){
        onAdd(count);

      }
      else{
        alert("No se agregaron elementos");
      }

    }
    return (
      <div>
        <div>
        <IconButton aria-label="delete" color="secundary"  onClick={ subtractCount}>
          <RemoveIcon />
        </IconButton>
        <Button variant="outlined" color="primary">
         {count}

         </Button>
          <IconButton aria-label="delete" color="secundary" onClick={ addCount }>

          <AddIcon />
          </IconButton>
        </div>
        <Button 
          variant="outlined"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick= { addSale } >Agregar al carrito</Button>
        </div>

        
     
    );
  }

  

  export default ItemCount;