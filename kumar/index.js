import express from "express";
import cors from 'cors';
const app=express();
app.use(cors());
app.get("/",(req,res)=>{
    res.send("I have successfully written my api")
}
)
app.get("/Aboutus",(req,res)=>{
    res.json(
        {
            Name:"Saikumar Jallarapu",
            Fathername:"RamaRao",
            Mothername:"Mangamma"
        }
    )
})
app.listen(8005,()=>{
    console.log("Likhitha is a waste fellow")
})


