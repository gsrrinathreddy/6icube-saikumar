import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AboutCard from '../../AboutCard';




export default  function About(){
    return(
        <> 
        <Typography variant="h4" gutterBottom marginTop="150px">
            About Us
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={6} >
        <img src="http://events2go.com.au/assets/front/images/image-06.png"></img>
        </Grid>
        <Grid  xs={5} marginTop="70px" textAlign="justify" >
        <Typography variant="h6" gutterBottom color="orange">
        ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
        </Typography>
        <Typography variant="h6" gutterBottom>
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
</Typography>
        </Grid>
        <Grid  xs={4} marginTop="80px" marginLeft="180px" textAlign="justify" color="blue">
        <Typography variant="h6" gutterBottom>
        Why Events2go is essential for Corporates, Governments and Not-for-profit sectors?
        </Typography>
        <Typography variant="h6" gutterBottom color="black" >
Remotely working Employee well-being has become crucial in terms of productivity and hence online engagement is the only game changer to identify employee well-being and performance management support.

Not-for-profits often find it difficult to organise webinars, online charity and fundraising events due to limited IT resources and financial requirements.

Organising events more efficiently and effectively through monitoring mechanism that registers the RSVPs, feedback and issuing ticketing 
        </Typography>
        </Grid>
        <Grid  xs={6} >
        <img src="https://lh3.googleusercontent.com/SG32i7-2UCMuEWwXZEgoDzNuyeKTo3xAgqn9Jv_rVtobdBMqtCgZ49MkzUxmv6jYK7UG6VjvQXoVsDErlVaHfjOnTyNPlppqKsJf4CY2" height="550px" />
        </Grid>
      </Grid>
    </Box>
    <Grid xs={12} margin="50px">

<Typography variant="h3" color="blue" >

Key features

</Typography>
</Grid>
<Grid  xs={6} sx={{margin:"20px",marginLeft:"200px"}}>

<Grid container spacing={0} marginTop="10px" textAlign="justify">
  
<AboutCard
title="Easy Event creation for the purposes of Registration & Check-in"
data1=" •Helps in developing custom registration forms"

data2="• Secure important attendee information"

data3="• Generates QR codes for quick scanning and onsite check-ins"

data4="• Assist people with the option to self-check in within the app"

data5="• Easily track attendance rates in real-time"/>

<AboutCard
title="Engagement"
data1="• Accessible Live streaming or virtual presentations through Events2go App"

data2="• Accessible Live streaming or virtual presentations through Events2go App "

data3="•Publish multimedia content for easy download "

data4="•Set up live polls, Q&A sessions and leader-boards for attendees "

data5="•Display job boards and product listings "/>

<AboutCard
title="Networking & Lead Capture"
data1="•Seamless contact exchange between attendees through QR scanning "

data2="• Allow attendees to search for users, ‘favourite’ their contacts, and export contact lists "

data3="• Connect attendees through Events2go in-App chat & meeting booking tools"

data4="• Helps attendees find exhibitors through an interactive floor map "

data5="• Host a live feed of the goings-on in your event or seek feedback instantly "/>

<AboutCard
title="Promotion, Branding and Sponsorship"
data1="•Create white-labelled apps featuring your custom branding"

data2="• Sell spaces within your app’s virtual exhibit hall "

data3="•Offer full-page splash ads to increase sponsor visibility"

data4="•Set up rolling banner ads throughout the mobile app "

data5="• Set up a sponsor’s page to increase logo visibility"/>

<AboutCard
title="Reporting and Analytics"
data1="•Track attendance rates, session check-ins and booth traffic within the app"

data2="•Evaluate individual attendee engagement through attendee journey tracking "

data3="• Measure satisfaction through surveys about the event in general and individual sessions"

data4="• Export your data to further evaluate and share with event partners "

/>

       
       
      </Grid>
    </Grid>

   
  
    
    
    

        </>
    )
}