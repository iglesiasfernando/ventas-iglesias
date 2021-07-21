import React, { useContext }  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

import {CartContext} from '../../contexts/CartContext'

const NavLink = require("react-router-dom").NavLink;

function Cart() {

    const cartContext = useContext(CartContext)

    const columns = [
        { field: 'item.id', headerName: 'ID', width: 70 },

        { field: 'item.title', headerName: 'Nombre', width: 200,valueGetter: (params) => {
            return params.row.item.title;
          } 
        },
        { field: 'item.price', headerName: 'Precio', width: 200,valueGetter: (params) => {
            return params.row.item.price;
          } 
        },
        { field: 'quantity', headerName: 'Cantidad', width: 200 },
        {
            width: 200,
            field: "",
            headerName: "Accion",
            disableClickEventBubbling: true,
            renderCell: (params) => {
              const onClick = () => {
                cartContext.removeItem(params.id)
              };
        
              return <Button onClick={onClick}>Borrar</Button>;
            }
        }
    ];
      
    return (
        
        <div >
            { cartContext.cartItems.length > 0 ?  
                <div className="inlineBlock" style={{ height: 400, width: '60%' }}>
                    <DataGrid getRowId={(r) => r.item.id} rows={cartContext.cartItems} columns={columns} pageSize={20} />
                    <label>Total : </label>  
                    <label> 
                        { cartContext.cartItems.reduce((elem1,elem2) => {
                        return elem1 + (parseInt(elem2.item.price) * elem2.quantity)
                        },0)
                        }
                    </label>
                </div> 
                : 
                <div>
                    <h2> No hay nada en el carrito</h2>
                    <div>
                        <NavLink
                            to={"/"}
                            className = "noDecoration">
                            <Button 
                            variant="outlined"
                            color="primary"
                            className = "marginTop2">Volver a comprar
                            </Button>
                        </NavLink>
                    </div>
                    
                </div>
                }
            
        </div>

        
      
    );
  }

  

  export default Cart;