import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import BasicCard from '../../BasicCard';



export default  function About(){
    return(
        <> 
        <Typography variant="h4" gutterBottom>
            About Us
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={6} >
        <img src="http://events2go.com.au/assets/front/images/image-06.png"></img>
        </Grid>
        <Grid  xs={6} marginTop="30px" >
        <Typography variant="h4" gutterBottom>
        ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
        </Typography>
        <Typography variant="h5" gutterBottom>
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
</Typography>
        </Grid>
        <Grid  xs={6}>
        <Typography variant="h4" gutterBottom>
        Why Events2go is essential for Corporates, Governments and Not-for-profit sectors?
        </Typography>
        <Typography variant="h5" gutterBottom>
Remotely working Employee well-being has become crucial in terms of productivity and hence online engagement is the only game changer to identify employee well-being and performance management support.

Not-for-profits often find it difficult to organise webinars, online charity and fundraising events due to limited IT resources and financial requirements.

Organising events more efficiently and effectively through monitoring mechanism that registers the RSVPs, feedback and issuing ticketing 
        </Typography>
        </Grid>
        <Grid  xs={6} >
        <img src="https://th.bing.com/th/id/OIP.ruAvT7wMgLuMe546tm4idgHaE7?w=273&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="350px" width="500px"/>
        </Grid>
      </Grid>
    </Box>
    <Grid xs={12} margin="50px">

<Typography variant="h3" >

Key features

</Typography>
</Grid>
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={6}>
        <Typography gutterBottom variant="h4" component="div">
        Easy Event creation for the purposes of Registration & Check-in
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography gutterBottom variant="h5" component="div">
        • Helps in developing custom registration forms
        
• Secure important attendee information

• Generates QR codes for quick scanning and onsite check-ins

• Assist people with the option to self-check in within the app

• Easily track attendance rates in real-time
</Typography>
        </Typography>

       
 
        </Grid>
        <Grid  xs={6}>
        <Typography gutterBottom variant="h4" component="div">
        Engagement
         </Typography>
         <Typography variant="body2" color="text.secondary">
         <Typography gutterBottom variant="h5" component="div">
         •Accessible Live streaming or virtual presentations through Events2go App

• Businesses can gain more visibility through Events2go in-App exhibit booths

• Publish multimedia content for easy download

• Set up live polls, Q&A sessions and leader-boards for attendees

• Display job boards and product listings
         </Typography>
         </Typography>

        </Grid>
        <Grid  xs={6}>
        <Typography gutterBottom variant="h4" component="div">
        Networking & Lead Capture
         </Typography>
         <Typography variant="body2" color="text.secondary">
         <Typography gutterBottom variant="h5" component="div">
         vSeamless contact exchange between attendees through QR scanning

• Allow attendees to search for users, ‘favourite’ their contacts, and export contact lists

• Connect attendees through Events2go in-App chat & meeting booking tools

• Helps attendees find exhibitors through an interactive floor map

• Host a live feed of the goings-on in your event or seek feedback instantly
         </Typography>
         </Typography>
 
        </Grid>
        <Grid  xs={6}>
        <Typography gutterBottom variant="h4" component="div">
        Promotion, Branding and Sponsorship
         </Typography>
         <Typography variant="body2" color="text.secondary">
         <Typography gutterBottom variant="h5" component="div">
         •Create white-labelled apps featuring your custom branding

• Sell spaces within your app’s virtual exhibit hall

• Offer full-page splash ads to increase sponsor visibility

• Set up rolling banner ads throughout the mobile app

• Set up a sponsor’s page to increase logo visibility
         </Typography>
         </Typography>

        </Grid>
        <Grid  xs={6}>
        <Typography gutterBottom variant="h4" component="div">
        Reporting and Analytics
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography gutterBottom variant="h5" component="div">
        •Track attendance rates, session check-ins and booth traffic within the app

• Evaluate individual attendee engagement through attendee journey tracking

• Measure satisfaction through surveys about the event in general and individual sessions

• Export your data to further evaluate and share with event partners
        </Typography>
        </Typography>

        </Grid>
      </Grid>
    </Box>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3} marginTop="100px">
     <Typography variant='h6'color="gray" marginTop="60px">
     Find events
     </Typography>
     <Typography>
     Search events
     </Typography>
     </Grid>
     <Grid xs={3} marginTop="100px">
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
     <Grid xs={3}marginTop="100px">
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
     <Grid xs={3} marginTop="100px">
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