import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';



export default function AboutCard(props) {
    
    const title=props.title;
    const description=props.description
  return (
    <Card sx={{ maxWidth: 450, height:"280px",margin:"20px"}}>
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="blue">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.data1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.data2}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.data3}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.data4}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.data5}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {props.data6}
        </Typography>
        
        
      </CardContent>
      
    </Card>
  );
}