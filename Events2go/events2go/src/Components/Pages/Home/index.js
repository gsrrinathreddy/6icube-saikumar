import BasicCard from "../../BasicCard";
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BasicTabs from "../../Tabpanel";


import { Typography } from "@mui/material";



export default  function Home(){

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
            image="http://buzzitsolutions.com/events/uploads/upcomingevents/_upcoming_1684472297.png"
            title="Hot brown Honey THE REMIX"
            description="may 20,2023"
            />
            
            <BasicCard
            image="http://buzzitsolutions.com/events/uploads/upcomingevents/_upcoming_1684239743.png"
            title="Hyderabads biggest weekend THEME PARTY"
            description="may 16,2023"

            />
            
            <BasicCard
            image="http://buzzitsolutions.com/events/uploads/upcomingevents/_upcoming_1684239374.png"
            title="Hot brown Honey THE REMIX"
            description="may 30,2023"/>
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

      <Typography variant="h6" > 

Below you'll find the schedule for Events 2023. We'll keep this page regularly updated with all new events and sessions, so be sure to keep checking in!
</Typography>  
</Grid>   
        </Grid>
        <Grid container spacing={0} columns={12}>
        <Grid  xs={6}>
       <BasicTabs/> 
        </Grid>
       
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid  xs={5} sx={{marginTop:"15px",spacing:"2px"}}>
        May 20, 2023
11am to 12pm
Hot Brown Honey THE REMIX - May 30 PARTY
 Devla
 Australia
Sydney Opera weekends getting lit more than ever!...
        </Grid>
        <Grid  xs={5} sx={{marginTop:"15px" }}>
        May 16, 2023
11:00 am - 1:00 pm AEST
Hyderabads Biggest Weekend THEME PARTY
 Sams Events
 Opera House, Bennelong Point, Sydney NSW 2000, Australia
Sydney Opera weekends getting lit more than ever!...

        </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid  xs={5} sx={{marginTop:"15px"}}>
      May 30, 2023
11:00 am - 1:00 pm AEST
Hot Brown Honey THE REMIX - May 30
 Sams Events
 Opera House, Bennelong Point, Sydney NSW 2000, Australia
Sydney Opera weekends getting lit more than ever!...

     </Grid>
      </Grid>
      

      
    </Box>
   
        
        </>
    )
}