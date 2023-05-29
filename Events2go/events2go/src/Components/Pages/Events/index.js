
import EventsCard from '../../EventsCard';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';

export default  function Events(){
    return(

        <>
        <Typography variant="h4" gutterBottom>
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
  
    
         
  
    
    
    

        </>
    )
}