import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';


import Button from '@mui/material/Button';  
import Accordion1 from '../../Accordion1';


export default  function Blog(){
    return(
        <> 
        <Typography variant="h4" gutterBottom marginTop="150px">
        Blog
      </Typography>
    
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid xs={1}></Grid>
        <Grid  xs={6} marginTop="50px">
        <Typography variant="h6" gutterBottom>
        Posted on May 22, 2023
        </Typography>
        <Typography variant="h6" gutterBottom marginLeft="30px">
Randon Pexson, Eventer’s CEO, announced as headliner of the Eventer Conference 2022
</Typography>
<img src="http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg" height="350px" width="600px" />
<Typography variant="h6" gutterBottom>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining...
</Typography>
<Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"20px",marginBottom:"10px",marginLeft:"0px"}}>
      More details
  </Button>
</Grid>
<Grid xs={4} marginTop="200px">
  <Accordion1/>
</Grid>
</Grid>

        <Grid container spacing={2}  >
        <Grid xs={1}></Grid>
        <Grid  xs={10} marginTop="50px">
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


<Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"20px",marginBottom:"10px",marginLeft:"0px"}}>
      More details
  </Button>
  
</Grid>

</Grid>


<Grid container spacing={2} >
<Grid xs={1}></Grid>
        <Grid  xs={10} marginTop="50px">
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

<Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"20px",marginBottom:"10px",marginLeft:"0px"}}>
      More details
  </Button>
  </Grid>
</Grid>

<Grid container spacing={2}  >
<Grid xs={1}></Grid>
        <Grid  xs={10} marginTop="50px">
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
</Grid>



    </Box>
        
        </>
    )
}