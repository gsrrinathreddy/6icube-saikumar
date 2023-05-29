import Typography from '@mui/material/Typography';
import ContactCard from '../../ContactCard';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import FacebookIcon from '@mui/icons-material/Facebook';

import Avatar from '@mui/material/Avatar';


export default  function Contact(){


    return(
         <>
         <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={4}>
          
        <ContactCard
         image="https://lh3.googleusercontent.com/g2YPmCGBZjCatKt2GLb55aGRvlZBDW6TFi-U5TYQkilM7JcQvZIrUOfJHq9BrFmSoOWg3LdJ4MiD8OB41WL5R6HTlAIAt7G_MaXAamU" height="30px"
         title="Our Location"
         description1="48 Cameron St"
         description2="Doonside NSW2767"
         
        />
       </Grid>
     
            <Grid xs={4}>
         <ContactCard
         image="https://lh3.googleusercontent.com/wANSydnv6j_P8GdW36168nF8NxmpGNv50_FIrdQjVfOFfpIDtzdTdoNkFLS9lYpGUfUlNEg2Evw3R3O1Ap-QPIRzowFXp-UB5xil_FX9" height="30px"
         title="Drop A Line"
         description1="infoevents2go@gmail.com"
         description2="infotechspheresolutions@gmail.com"
        />
        </Grid>
        <Grid xs={4}>
         <ContactCard
         image="https://lh3.googleusercontent.com/2pMEYxKyhcH3U1VDKe3InjQvs7cLsqKO3NfVODGdXMc2kLWnyqSerIR1S5MJu9UtepUhg6BovE3uSQAa04S_x43iSVk1kiAMFRh9orle" height="30px"
         title="Let's Talk"
         description1="Tel: +61 431 622 292"

         description2="Tel: +61 422 202 766"
        />
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
        </Box>
        </>
    )
} 