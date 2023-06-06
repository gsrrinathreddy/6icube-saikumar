
import EventsCard from '../../EventsCard';
import  Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';


export default  function Events(){
    return(

        <>
        <Typography variant="h4" gutterBottom marginTop="150px">
        All Events
      </Typography>
    
        <Grid  xs={6} sx={{margin:"20px"}}>

        <Grid container spacing={0}>
          
        <EventsCard
  image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1685130536.png"
        title="Sankranti"
        date="May 30,2023"
        time="10AM to 11PM"
        location="Australia"/>
        
   <EventsCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684994123.png"
        title="Diwali"
        date="May 26,2023"
        time="10AM to 11PM"
        location="Sydney,Australia"/>
        
   <EventsCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684929750.jpg"
        title="Mothers day"
        date="May 27,2023"
        time="11Am to 12Pm"
        location="Lalor park community Centre, 1 freeman St.Lalor parkNSW2147"/>
        
   
       

        <EventsCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684868547.png"
        title="Accessibility"
        date="May 25,2023"
        time="7PM to 12AM"
        location="Opera House sails"/>
        
        <EventsCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684472297.png"
        title="Hot Brown Honey THE REMIX-may 30"
        date="May 20,2023"
        time="11Am to 12Pm"
        location="Australia"/>
        
        <EventsCard
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684239743.png"
        title="Hyderabds biggest weekend THEME"
        date="May 16,2023"
        time="11Am to 1Pm AEST"
        location="Opera House,bennelong Point,Sydney NSW 2000,Australia"/>

<EventsCard
   
   image="http://events2go.com.au/uploads/upcomingevents/_upcoming_1684239374.png"
        title="Hot Brown Honey THE REMIX"
        date="May 30,2023"
        time="11Am to 1Pm AEST"
        location="Opera House,bennelong Point,Sydney NSW 2000,Australia"/>"
        
          </Grid> 
          </Grid>
          
        
  
    
    
    

        </>
    )
}