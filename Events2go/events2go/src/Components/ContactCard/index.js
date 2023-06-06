import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function ContactCard(props) {
    const image=props.image;
    const title=props.title;
   
  return (
    <Card sx={{ maxWidth: 345, height:"500px", width:"400px",margin:"40px"}}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
        title={props.title}
        description1={props.description1}
        description2={props.description2}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description2}
        </Typography>
       
       
       
        
      </CardContent>
      
    </Card>
  );
}