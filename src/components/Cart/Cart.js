import React, { useContext }  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import {CartContext} from '../../contexts/CartContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getFirestore } from '../../firebase'
const NavLink = require("react-router-dom").NavLink;


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  function getModalStyle() {
    const top = 50
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
function Cart() {

    const cartContext = useContext(CartContext)
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [mail, setMail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const history = useHistory();
    const classes = useStyles();

    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleFinish = () => {
        const db = getFirestore()
        const buyer = { name:name,phone:phone,mail:mail}
        db.collection("orders").add({
            buyer : buyer,
            items : cartContext.cartItems,
            total : cartContext.cartItems.reduce((elem1,elem2) => {
                return elem1 + (parseInt(elem2.item.price) * elem2.quantity)
                },0)
        }).then((responseInsert) => {
            //actualizo stocks a mano xq no tenemos una api
            const itemRef = db.collection("items");
            cartContext.cartItems.map(element => {
                itemRef.doc(element.item.serverId).update({
                    stock : element.item.stock - element.quantity
                  }).then(responseUpdate => {
                    cartContext.clear()
                    history.push("/")
                }).catch(err => {
                    console.log('Error updating documents', err);
                  })
               
                return element
            })

          }).catch(err => {
            console.log('Error saving documents', err);
          });

      };
     
    const columns = [
        { field: 'item.id', headerName: 'ID', width: 70 },

        { field: 'item.title', headerName: 'Nombre', width: 200,valueGetter: (params)  => {
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
    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Completa tus datos para finalizar</h2>
            <TextField className="width100" id="name" label="Nombre" onChange={event =>setName(event.target.value)} />
            <TextField className="width100" id="phone" label="Telefono" onChange={event =>setPhone(event.target.value)}/>
            <TextField className="width100" id="mail" label="Mail" onChange={event =>setMail(event.target.value)}/>

         <div>
         <Button className="marginLeft1 marginTop1" variant="contained" color="primary"  onClick={handleClose}>
                        Cancelar
                    </Button>
         <Button className="marginLeft1 marginTop1" variant="contained" color="primary"  onClick={handleFinish}>
                        Finalizar
                    </Button>
         </div>
        </div>
      );
    return (
        
        <div >
            { cartContext.cartItems.length > 0 ?  
                <div className="inlineBlock" style={{ height: 400, width: '60%' }}>
                    <DataGrid getRowId={(r) => r.item.id} rows={cartContext.cartItems} columns={columns} pageSize={20} />
                    <label className="marginTop2">Total : </label>  
                    <label> 
                        { cartContext.cartItems.reduce((elem1,elem2) => {
                        return elem1 + (parseInt(elem2.item.price) * elem2.quantity)
                        },0)
                        }
                    </label>
                   
                    <Button className="marginLeft1 marginTop1" variant="contained" color="primary"  onClick={handleOpen}>
                        Finalizar
                    </Button>
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
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {modalBody}
            </Modal>
        </div>

        
      
    );
  }

  

  export default Cart;