import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Education(){
    let [loader,setLoader] = useState(true);
    let [Education,setEducation] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Education')
                                             .then(res=> {
                                                console.log(res.data);
                                                setEducation(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])

    return(
        <>
        
        <h2>B.Tech in abdul kalam institute of technological sciences with 7.38 CGPA</h2><br/>
        <h2>Diploma in abdul kalam institute of technological sciences with 77.27%</h2><br/>
        <h2>10th class in  govt high school with 8.0 CGPA</h2>
        
        
    
    
    

    
        
        </>
    )
}