import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';

import Button from '@mui/material/Button';  


export default  function Blog(){
    return(
        <> 
        <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
    
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={1}></Grid>
        <Grid  xs={6} marginTop="50px">
        <Typography variant="h6" gutterBottom>
        Posted on May 22, 2023
        </Typography>
        <Typography variant="h5" gutterBottom marginLeft="30px">
Randon Pexson, Eventer’s CEO, announced as headliner of the Eventer Conference 2022
</Typography>
<img src="http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg" height="350px" width="900px" />
<Typography variant="h6" gutterBottom>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining...
</Typography>


<Grid>
  <Button variant='contained' sx={{backgroundColor:"magenta"}}>
      More details
  </Button>
</Grid>
</Grid>

        <Grid container spacing={2} columns={16} >
        <Grid xs={1}></Grid>
        <Grid  xs={6} marginTop="50px">
        <Typography variant="h6" gutterBottom>
        Posted on May 18, 2023
        </Typography>
        <Typography variant="h6" gutterBottom textAlign="center"> 
            Eventer Careers: Top 4 tips to get your foot in the door
</Typography>
<img src="http://events2go.com.au/uploads/blog/post/devim_2057839072.jpg" height="350px" width="900px"/>
<Typography variant="h6" gutterBottom textAlign="center">
Reference site about Lorem Ipsum, giving information on its origins, as well as a random...
</Typography>
<Grid>
  <Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"20px",marginBottom:"10px",marginLeft:"0px"}}>
      More details
  </Button>
</Grid>
</Grid>
<Grid container spacing={2} columns={16}>
<Grid xs={1}></Grid>
        <Grid  xs={6} marginTop="50px">
        <Typography variant="h6" gutterBottom>
        Posted on May 18, 2023
        </Typography>
        <Typography variant="h6" gutterBottom> 
        First Speakers of Eventry Conference 2023 announced!
</Typography>
<img src="http://events2go.com.au/uploads/blog/post/devim_854574434.jpg" height="350px" width="900px"/>
<Typography variant="h6" gutterBottom>
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing...
</Typography>
<Grid>
  <Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"20px",marginBottom:"10px",marginLeft:"0px"}}>
      More details
  </Button>
</Grid> 
</Grid>

<Grid container spacing={2} columns={16} >
<Grid xs={1}></Grid>
        <Grid  xs={6} marginTop="50px">
        <Typography variant="h6" gutterBottom>
        Posted on May 17, 2023
        </Typography>
        <Typography variant="h6" gutterBottom> 
        Eventer Careers: Top 4 tips to get your foot in the door
</Typography>
<img src="http://events2go.com.au/uploads/blog/post/devim_1335223258.png" height="350px" width="900px"/>
<Typography variant="h6" gutterBottom>
Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida...
</Typography>

<Grid>
  <Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"20px",marginBottom:"10px",marginLeft:"0px"}}>
      More details
  </Button>
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
    </Grid>

    <Grid xs={12} marginRight="850px" marginTop="100px">
        <Typography>
        © Copyright Events2go. All Rights Reserved
        </Typography>
    </Grid>
    </Grid>
  
    
   

        </Grid>
      </Grid>
   
    
    </Box>
        
        </>
    )
}