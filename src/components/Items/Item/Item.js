import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './CardStyle'

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
          {item.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
         
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