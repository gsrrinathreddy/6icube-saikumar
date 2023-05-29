import BasicCard from '../../BasicCard'

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import { IconButton, Typography } from '@mui/material';

import Button from '@mui/material/Button';  

import BasicTabs from '../../Tabs';

import Accorditions from '../../Accorditions';

import Avatar from '@mui/material/Avatar';

import FacebookIcon from '@mui/icons-material/Facebook';


export default function Home(){

 


    return(
        <>



   

        <Typography variant="h4" gutterBottom>

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

        <Grid  xs={4} sx={{margin:"20px",marginLeft:"200px"}}>

        <Grid container spacing={0}>
          
        <BasicCard
  image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684994123.png"
        title="Diwali"
        date="May 26,2023"
        time="10AM to 11PM"
        location="Sydney,Australia"/>
        
   <BasicCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684929750.jpg"
        title="Mothers day"
        date="May 27,2023"
        time="11AM to 4PM"
        location="Lalor park community centre,1 freeman st,Lalor park NSW 2147"/>
        
   <BasicCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684868547.png"
        title="Accessibility"
        date="May 20,2023"
        time="11Am to 12Pm"
        location="Opera House, Bennelong Point, Sydney NSW 2000, Australia"/>
        
           
          </Grid>
        </Grid>


        <Box sx={{marginTop:"30px" }}>
      <Grid container spacing={0}>
        <Grid xs={6} >
          <img src="http://buzzitsolutions.com/events/assets/front/images/image-02.png"></img>
        </Grid>
        <Grid xs={6} sx={{marginTop:"85px"}} >
        ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
        <Typography variant="h5">
        Welcome to Events2go Event Manager
      </Typography>
      <Typography variant="h6" >
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
<Button variant="contained">Event schedule</Button>
</Typography>    
        </Grid>
        <Grid container spacing={0} columns={16}>
        <Grid  xs={8} sx={{backgroundColor:"pink"}}>
        <Typography variant="h3" >
        Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser!
        </Typography>
        </Grid>
        
        <Grid  xs={8}>
         <img src="https://th.bing.com/th/id/OIP.ruAvT7wMgLuMe546tm4idgHaE7?w=273&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </Grid>
      </Grid>
       
       
        
        <Grid xs={12} sx={{marginLeft:"70px"}}>

        <Typography variant="h3" >

        Trending Events

      </Typography>

      <Typography variant='h6'>
    Below you'll find the schedule for Events 2023. We'll keep this page regularly
    updated with all new events and sessions, so be sure to keep checking in!
    </Typography>
    </Grid>

     <BasicTabs/>

      <Grid>
        <Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"40px",marginBottom:"40px",marginLeft:"700px"}}>
            Event Schedule
        </Button>
      </Grid>
      <Grid xs={12}>
      

    <Typography variant='h4' marginTop="100px">

        Events for  every occation
    
    </Typography>
    </Grid>
    <Typography variant='h4' marginTop="50px" color="purple">
    Diversity is our strength, we would like to bring people from all walks of life to work together
    </Typography>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
     <Typography variant='h6'color="purple">
        Free Events
     </Typography>
     <Typography>
        Standard Free 
     </Typography>
     <Typography>
     Applicable
     </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="purple">
        Standard
     </Typography>
     <Typography>
     5% + $1.00
     </Typography>
     <Typography>
     Per paid ticket
     </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="purple">
        Charities
     </Typography>
     <Typography>
     2.5% + $0.50
      </Typography>
      <Typography>
      Per paid ticket
      </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="purple">
        Custom
     </Typography>
     <Typography>
     Thinking big? Let's talk.
     </Typography>
     <Button variant='contained'>
        Contact Us
     </Button>
     </Grid>
    </Grid>
    <Typography variant='h6' color="gray" marginTop="70px">
    All plans include access to all features. Technology, Pricing, Customer Service, and Support will be provided.
    </Typography>
    <Typography variant='h5' marginBottom="100px">
    Quality Service and Customer first.
    </Typography>
    <Typography variant='h4'>
    Creative, Engaged, Well-connected, Self-promoting and 
    </Typography>
    <Typography variant='h4'>
    Reporting Event Organiser!
    </Typography>
    <Typography variant='h6' marginTop="10px">
    Customize your events with our design tools and event builder.
    </Typography>
    <Typography variant='h4' marginTop="100px">
    Our Reviews Latest News & Articles
    </Typography>
    <Typography variant='h6'>
    Events 2023 gathered the brightest minds globally. Explore new skills and
    </Typography>
    <Typography variant='h6'>
    attributes from our experts and practitioners.
    </Typography>

    <Grid item xs={12} sx={{backgroundColor:"white",p: 4,marginLeft:"110px"}}>
   
        </Grid>
        </Grid>

        <Typography variant='h4' marginTop="100px" color="gray">
          Have Questions?Look Here 
        </Typography>
        <Typography variant='h6'>
        Events 2023 gathered the brightest minds in the tech world. Learn new skills and
        </Typography>
        <Typography variant='h6'>
        get insights from experts and practitioners from all around!
        </Typography>
        <Accorditions/>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Find events
     </Typography>
     <Typography>
     Search events
     </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Host events
     </Typography>
     <Typography>
     All features
     </Typography>
     <Typography>
     Pricing
     </Typography>
     <Typography>
     FAQs
     </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Get in touch
     </Typography>
     <Typography>
     Help
      </Typography>
      <Typography>
      Contact us
      </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Follow us on
     </Typography>
     <IconButton>
     <FacebookIcon/><Avatar marginBottom="10px">in</Avatar>
     </IconButton>
     </Grid>
    </Grid>

    <Grid xs={12} marginRight="850px" marginTop="100px">
        <Typography>
        © Copyright Events2go. All Rights Reserved
        </Typography>
    </Grid>
  
    </Box>
        </>
    )
}
      
   