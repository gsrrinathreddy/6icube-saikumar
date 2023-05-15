
import Grid from '@mui/material/Grid';
import BasicCard from '../../BasicCard';
const products=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN6GvlkzPUxErmC-rSt093-NcRY0ArP8BJwo5uTWNPsO8idVQi9vwlSkeDZkkyFUF9ho&usqp=CAU",
        title:"photo frame",
        description:"photo frame",
        price:"200",
        rating:"*5.0"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN6GvlkzPUxErmC-rSt093-NcRY0ArP8BJwo5uTWNPsO8idVQi9vwlSkeDZkkyFUF9ho&usqp=CAU",
        title:"photo frame",
        description:"photo frame",
        price:"200",
        rating:"*5.0"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN6GvlkzPUxErmC-rSt093-NcRY0ArP8BJwo5uTWNPsO8idVQi9vwlSkeDZkkyFUF9ho&usqp=CAU",
        title:"photo frame",
        description:"photo frame",
        price:"200",
        rating:"*5.0"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN6GvlkzPUxErmC-rSt093-NcRY0ArP8BJwo5uTWNPsO8idVQi9vwlSkeDZkkyFUF9ho&usqp=CAU",
        title:"photo frame",
        description:"photo frame",
        price:"200",
        rating:"*5.0"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN6GvlkzPUxErmC-rSt093-NcRY0ArP8BJwo5uTWNPsO8idVQi9vwlSkeDZkkyFUF9ho&usqp=CAU",
        title:"photo frame",
        description:"photo frame",
        price:"200",
        rating:"*5.0"
    },
    
]
export default function Products(){
  return (
    <>
      <Grid container spacing={0}>
        <Grid  xs={12} sx={{backgroundColor:"red"}}>
        SAIKUMAR
        <Grid container spacing={0}>
           
            {
                products.map((products)=>{
                    return<BasicCard image ={products.image} title={products.title} description={products.description} price={products.price} rating={products.rating}/>
                })
            }
        </Grid>
        </Grid>
        </Grid>
        </>
        )
        }
        
      
      
    
  

        
    