import express  from "express";
import cors from 'cors';

const app=express();
app.use(cors())
app.get("/",(req,res)=>{
    res.send("I have successfully written my first api")
})
app.get("/Aboutme",(req,res)=>{
    res.json(
        {
            name:"Saikumar Jallarapu",
            Fathername:"RamaRao",
            Mothername:"Mangamma"

        }
    )
})
app.get("/Experience",(req,res)=>{
    res.json(
        {
          experience:"Fresher"

        }
    )
})
app.get("/Education",(req,res)=>{
    res.json(
        {
          education:"B.Tech(mechanical"

        }
    )
})
app.get("/Skills",(req,res)=>{
    res.json(
        {
          skills:"Communication,self motivation"

        }
    )
})
app.get("/Hobbies",(req,res)=>{
    res.json(
        {
          hobbies:"planting,cooking,reading"

        }
    )
})

app.listen(8001,()=>{
    console.log("my server is running on port 8001")
})