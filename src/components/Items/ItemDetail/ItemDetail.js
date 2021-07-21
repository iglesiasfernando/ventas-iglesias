import React, { useState,useContext }  from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@material-ui/core/Button';

import { useStyles } from './ItemDetailStyle'
import { CartContext } from '../../../contexts/CartContext'

const NavLink = require("react-router-dom").NavLink;

function ItemDetail({item}) {

    const [itemQuantity,setItemQuantity] = useState();
    const cartContext = useContext(CartContext)

    const classes = useStyles()
    const onAdd = (cantidadVar) => {
      if(cantidadVar <= item.stock){
        //if(!cartContext.isInCart(item)){
          cartContext.addItem({ item:item, quantity:cantidadVar})
          setItemQuantity(cantidadVar)

        // }
        // else{
        //   cartContext.removeItem(item)
        //   alert("Ya se agregó el item al carrito")
        // }
      }
      else{
        alert("Stock insuficiente")
      }
     
      
    }
    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={item.title} src={item.pictureUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {item.description}
                  </Typography>
                  
                  <Typography variant="h4">${item.price}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: {item.id}
                  </Typography>
                </Grid>
                
              </Grid>
              
            </Grid>
          </Grid>
        </Paper>
        { itemQuantity ?  
        <NavLink
            to={"/cart"}
            className = "noDecoration">
            <Button 
              variant="outlined"
              color="primary"
              className = "marginTop2">Finalizar compra
            </Button>
          </NavLink> : <ItemCount initialStock={item.stock} initial={0} onAdd={ onAdd}></ItemCount>}

        
    </div>    
     
    );
  }

  

  export default ItemDetail;