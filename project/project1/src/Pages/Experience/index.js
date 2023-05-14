import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Experience(){
    let [loader,setLoader] = useState(true);
    let [Experience,setExperience] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Experience')
                                             .then(res=> {
                                                console.log(res.data);
                                                setExperience(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])


    return(
        <>
        <h1>I am a Fresher</h1>
        </>
    )
}