import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './CardStyle'
import NavLink from 'react-router-dom/NavLink'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function Item({item }) {
  const classes = useStyles()

  
return (
  <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {item.title}
          </Typography>
          <Typography component="h6" variant="h6">
            ${item.price}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {/* {item.description} */}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <CardActions>
          <NavLink className = "noDecoration" to={"/item/"+item.id}><Button size="small">Ver mas</Button></NavLink>
        </CardActions>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image= {item.pictureUrl}
        title="Live from space album cover"
      />
    </Card>
  
  

 
  // <Card elevation="10" className={classes.root} variant="outlined">
  //   <CardContent>
   
  //     <Typography className={classes.title} color="textSecondary" gutterBottom>
  //       Word of the Day
  //     </Typography>
  //     <Typography className={classes.pos} color="textSecondary">
  //       adjective
  //     </Typography>
  //     <Typography variant="body2" component="p">
  //       well meaning and kindly.
        
  //     </Typography>
  //   </CardContent>
    
  // </Card>
);
}
  export default Item;