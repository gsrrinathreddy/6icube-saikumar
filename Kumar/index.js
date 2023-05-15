import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors())
app.get("/",(req,res)=>{
    res.send("I have successfully written my api")

})
app.get("/Aboutus",(req,res)=>{
    res.json(
        {
            name:"Sai kumar",
            qualification:"B.Tech",
            experience:"Fresher"

        }
    )
})
app.get("/products/mobiles",(req,res)=>{
    res.json(
    [
           {
            brand:"Apple",
            model:"iphone-12",
            price:"Rs 80000"
           },
           {
            brand:"redme",
            model:"note5",
            price:"Rs 10000"
           },
           {
            brand:"vivo",
            model:"y20g",
            price:"Rs 15000"
           }

    ]
    )
})

app.listen(8007,()=>{
    console.log("my server is running on port 8007")

})
