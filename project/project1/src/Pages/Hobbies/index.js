import planting from './Assets/planting.jpg'
import cooking from './Assets/cooking.jpg'
import reading from './Assets/reading.jpg'
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Hobbies(){
    let [loader,setLoader] = useState(true);
    let [Hobbies,setHobbies] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Hobbies')
                                             .then(res=> {
                                                console.log(res.data);
                                                setHobbies(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])


    return(
        <html>
            <body>
                <h2>PLANTING</h2>
                <img src={planting} alt="kk" width="250" height="250"/> 
                <h2>COOKING</h2>
                <img src={cooking} alt="kk" width="250" height="250"/> 
                <h2>READING</h2>
                <img src={reading} alt="kk" width="250" height="250"/> 
            </body>
        </html>

    )
    
}