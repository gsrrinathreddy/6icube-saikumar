import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function BasicCard(props) {
    const image=props.image;
    const title=props.title;
   
  return (
    <Card sx={{ maxWidth: 345, height:"500px", width:"400px",margin:"40px"}}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <CalendarMonthIcon/> {props.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <AccessTimeIcon/>{props.time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LocationOnIcon/>{props.location}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}