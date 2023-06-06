import Typography from '@mui/material/Typography';
import ContactCard from '../../ContactCard';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';




export default  function Contact(){


    return(

         <>
         <Typography variant="h4" gutterBottom marginTop="150px">
        Contact Us
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={4}>
          
        <ContactCard
         image="https://th.bing.com/th/id/OIP.EyRP4-vTfImJS_to73mHLwHaFf?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="30px"
         title="Our Location"
         description1="48 Cameron St"
         description2="Doonside NSW2767"
         
        />
       </Grid>
     
            <Grid xs={4}>
         <ContactCard
         image="https://th.bing.com/th?q=Telegram+Icon+HD&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" height="30px"
         title="Drop A Line"
         description1="infoevents2go@gmail.com"
         description2="infotechspheresolutions@gmail.com"
        />
        </Grid>
        <Grid xs={4}>
         <ContactCard
         image="https://th.bing.com/th?q=Mobile+Icon+Blue&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" height="30px"
         title="Let's Talk"
         description1="Tel: +61 431 622 292"

         description2="Tel: +61 422 202 766"
        />
         </Grid>
         </Grid>
         <Typography variant="h4" gutterBottom >
         Send A Message
      </Typography>

      <Typography variant="h6" gutterBottom >
      Please don't hesitate to get in touch with us anytime
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={2}></Grid>
<Grid xs={8}>
<TextField fullWidth label="Enter Your name*" id="fullwidth" />
<TextField fullWidth label="Enter Your Email*" id="fullWidth" sx={{marginTop:"30px"}}/>
<TextField fullWidth label="Your Message" id="fullWidth" sx={{marginTop:"30px"}}/>

</Grid>
<Grid xs={2}></Grid>
</Grid>   
        
         
        </Box>
       
        </>
    )
} 