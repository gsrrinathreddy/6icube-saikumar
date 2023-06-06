import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CardActions } from '@mui/material';

export default function HomeCard(props) {
    const date=props.date;
    const image=props.title;
    const title=props.image;
    const description=props.description
  return (
    <Card sx={{ maxWidth:750,margin:"30px"}}>
        <Typography gutterBottom variant='h6' textAlign="justify" component="div">
            {props.date}
        </Typography>
        <Typography gutterBottom variant='h6' textAlign="justify" component="div">

        {props.title}
        </Typography>
     
        <Typography gutterBottom variant='h6' textAlign="justify" component="div">

        {props.description}
        </Typography>
      <CardMedia
        sx={{ height: 300 }}
        date={props.date}
        title={props.title}
        image={props.image}
        description={props.description}
      />
     <CardContent>
     <Typography gutterBottom variant='h7' textAlign="justify" component="div">
        {props.description}
        </Typography>
     </CardContent>
      <CardActions>
        <Button variant="outlined" color="inherit">
            More details
        </Button>
        </CardActions>
    </Card>
  );
}