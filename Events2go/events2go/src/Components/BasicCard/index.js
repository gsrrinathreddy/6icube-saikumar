import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function BasicCard(props) {
    const image=props.image;
    const title=props.title;
    const description=props.description
  return (
    <Card sx={{ maxWidth: 345, height:"350px",margin:"20px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
       <CalendarMonthIcon/>{props.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          <AccessTimeIcon/>{props.time}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          <LocationOnIcon/>{props.location}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}