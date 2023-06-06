import BasicCard from '../../BasicCard'

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import {  Typography } from '@mui/material';

import Button from '@mui/material/Button';  

import BasicTabs from '../../Tabs';

import Accorditions from '../../Accorditions';

import TextField from '@mui/material/TextField';

import HomeCard from '../../HomeCard';
import { useNavigate } from 'react-router-dom';


export default function Home(){
  const navigate= useNavigate();
  const onEvents=(e)=>{
    e.preventDefault();
    navigate('/Events')
  }

  const onContact=(e)=>{
    e.preventDefault();
    navigate('/Contact')
  }

    return(
        <>
          <Typography variant="h4" gutterBottom marginTop="150px">

        Go Kangaroos your appetite starts here!
      </Typography>

      <Typography variant="h4" gutterBottom>

      All your Events schedule in Events2go
      </Typography>

      <Typography variant="h4" gutterBottom>

      Event Manager App

      </Typography>

      <Typography variant="h4" gutterBottom>

      Creative, Engaged, Well-connected, Self-

      </Typography>

      <Typography variant="h4" gutterBottom>

      promoting and Reporting Event Organiser!

     </Typography>

        <Grid  xs={4} sx={{margin:"20px",marginLeft:"180px"}}>

        <Grid container spacing={0}>
          
        <BasicCard
  image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684994123.png"
        title="Diwali"
        date="May 26,2023"
        time="10AM to 11PM"
        location="Opera House, Bennelong Point, Sydney NSW 2000, Australia"/>
        
   <BasicCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684929750.jpg"
        title="Mothers day"
        date="May 27,2023"
        time="11AM to 4PM"
        location="Lalor park community centre,1 freeman st,Lalor park NSW 2147"/>
        
   <BasicCard
   image="http://events2go.com.au/uploads/blog/post/devim_854574434.jpg"
        title="Accessibility"
        date="May 20,2023"
        time="11Am to 12Pm"
        location="Opera House, Bennelong Point, Sydney NSW 2000, Australia"/>
        
           
          </Grid>
        </Grid>


        <Box sx={{marginTop:"30px" }}>
      <Grid container spacing={0}>
        <Grid xs={6} >
          <img src="http://events2go.com.au/assets/front/images/image-02.png"></img>
        </Grid>
        <Grid xs={5} sx={{marginTop:"30px",textAlign:"justify",marginRight:"10px"}} >
          <Grid>
          <Typography sx={{color:"orange"}} >
        ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
        </Typography>
        </Grid>
        <Typography variant="h5" marginTop="30px">
        Welcome to Events2go Event Manager
      </Typography>
      <Typography variant="h6"  >
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
</Typography>  
<Typography marginTop="20px">
<Button variant="contained" onClick={onEvents}>Event schedule</Button>
</Typography>
        </Grid>
        </Grid>
        <Grid container spacing={0} columns={16}>
        <Grid  xs={8} >
        <Typography variant="h3" >
        Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser!
        </Typography>
        </Grid>
        
        <Grid  xs={8} >
         <img src="https://th.bing.com/th/id/OIP.ruAvT7wMgLuMe546tm4idgHaE7?w=273&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"width="500px" height="230px"/>
        </Grid>
      </Grid>
       
       
        
        <Grid xs={12} sx={{marginLeft:"70px", marginTop:"30px"}}>

        <Typography variant="h3" >

        Trending Events

      </Typography>

      <Typography variant='h6'>
    Below you'll find the schedule for Events 2023. We'll keep this page regularly
    </Typography>
    <Typography variant='h6'>
    updated with all new events and sessions, so be sure to keep checking in!
    </Typography>
    </Grid>

     <BasicTabs/>

      <Grid>
        <Button variant='contained' onClick={onEvents} sx={{backgroundColor:"magenta", marginTop:"40px",marginBottom:"40px",marginLeft:"700px"}}>
            Event Schedule
        </Button>
      </Grid>
      <Grid xs={12} marginBottom="50px">
      <Typography variant='h3'>
      Our mission is to bring people together!
      </Typography>
      <img src="https://www.jic.ac.uk/app/uploads/2018/11/Friday-Seminars.jpg" height="800px" width="1500px"></img>
      <Button variant='contained' onClick={onContact} sx={{backgroundColor:"magenta", marginTop:"60px"}}>
            Join Us
        </Button>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid xs={12} sx={{backgroundColor:"lightblue"}}>
    <Typography variant='h4' marginTop="100px" >

        Events for  every occation
    
    </Typography>
    </Grid>
    <Grid xs={11} sx={{backgroundColor:"lightblue"}}>
    <Typography variant='h4' marginTop="30px" color="purple" marginLeft="300px">
    Diversity is our strength, we would like to bring people from all walks of life to work together
    </Typography>
    </Grid>
    <Grid xs={1} sx={{backgroundColor:"lightblue"}}></Grid>
  

   
        <Grid xs={3}  sx={{backgroundColor:"lightblue"}}>
     <Typography variant='h6'color="purple" marginTop="20px">
        Free Events
     </Typography>
     <Typography>
        Standard Free 
     </Typography>
     <Typography>
     Applicable
     </Typography>
     </Grid>
     <Grid xs={3} sx={{backgroundColor:"lightblue"}}>
     <Typography variant='h6'color="purple" marginTop="20px">
        Standard
     </Typography>
     <Typography sx={{backgroundColor:"lightblue"}}>
     5% + $1.00
     </Typography>
     <Typography sx={{backgroundColor:"lightblue"}}>
     Per paid ticket
     </Typography>
     </Grid>
     <Grid xs={3}sx={{backgroundColor:"lightblue"}}>
     <Typography variant='h6'color="purple" marginTop="20px">
        Charities
     </Typography>
     <Typography sx={{backgroundColor:"lightblue"}}>
     2.5% + $0.50
      </Typography>
      <Typography sx={{backgroundColor:"lightblue"}}>
      Per paid ticket
      </Typography>
     </Grid>
     <Grid xs={3}sx={{backgroundColor:"lightblue"}}>
     <Typography variant='h6'color="purple" marginTop="20px">
        Custom
     </Typography>
     <Typography sx={{backgroundColor:"lightblue"}}>
     Thinking big? Let's talk.
     </Typography>
     <Button variant='contained' onClick={onContact}>
        Contact Us
     </Button>
     </Grid>
    </Grid>
    <Grid xs={10}>
    <Typography variant='h6' color="gray" marginTop="100px" marginLeft="50px">
    All plans include access to all features. Technology, Pricing, Customer Service, and Support will be provided.
    </Typography>
    
    <Typography variant='h5'marginLeft="50px" marginTop="10px" >
    Quality Service and Customer first.
    </Typography>
    <Typography variant='h4' marginTop="150px" marginLeft="50px">
    Creative, Engaged, Well-connected, Self-promoting and 
    </Typography>
    <Typography variant='h4' marginLeft="50px">
    Reporting Event Organiser!
    </Typography>
    <Typography variant='h6' marginTop="10px" marginLeft="50px">
    Customize your events with our design tools and event builder.
    </Typography>
    <Typography variant='h4' marginTop="100px" marginLeft="50px">
    Our Reviews Latest News & Articles
    </Typography>
    <Typography variant='h6' marginLeft="50px">
    Events 2023 gathered the brightest minds globally. Explore new skills and
    </Typography>
    <Typography variant='h6' marginLeft="50px">
    attributes from our experts and practitioners.
    </Typography>
    </Grid>
    <Grid xs={4}>
   <Grid container spacing={0} marginLeft="250px">
    <HomeCard
      date="Posted on May 22, 2023"
      title="Latest News"
      image="http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg"
      description="It has survived not only five..."
      />
      
      <HomeCard
      date="Posted on May 18, 2023"
      title="Articles"
      image="http://events2go.com.au/uploads/blog/post/devim_2057839072.jpg"
      description="Reference site about Lorem..."
      />

<HomeCard
      date="Posted on May 18, 2023"
      title="Reviews"
      image="http://events2go.com.au/uploads/blog/post/devim_854574434.jpg "
      description="Reference siteLorem ipsum is..."
      />
       </Grid>
      
    <Grid  xs={12} sx={{backgroundColor:"white",p: 4,marginLeft:"110px", textAlign:"justify"}}>
   
       
        </Grid>

        <Typography variant='h4' marginTop="100px" color="gray">
          Have Questions?Look Here 
        </Typography>
        <Typography variant='h6'>
        Events 2023 gathered the brightest minds in the tech world. 
        </Typography>
        <Typography variant='h6'>
        get insights from experts and practitioners from all around!
        </Typography>
        <Accorditions/>

        <Grid xs={12} sx={{backgroundColor:"purple", color:"white",height:"500px"}}>
          <Typography variant='h3' marginTop="100px" marginBottom="100px">
        Keep upto date with events
        </Typography>
        <Typography variant='h5' marginTop="10px">
        Events 2023 gathered the brightest minds globally. Explore new skills and 
        </Typography>
        <Typography variant='h5' marginTop="10px">
        attributes from our experts and practitioners.
        </Typography>
        <Grid xs={12} >
        <Typography variant='h6' marginTop="10px">
        <TextField id="outlined-basic" label="Events2go" variant="outlined" sx={{backgroundColor:"white"}} />
     
        <Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"10px" ,marginLeft:"30px"}}>
            Get started
        </Button>
        </Typography>
        </Grid>
      
        <Typography variant='h6' marginTop="30px">
        Check out our Privacy Policy     Terms Of Use  for more information
        </Typography>
        </Grid>
        </Grid>
  
    </Box>
        </>
    )
}
      
   