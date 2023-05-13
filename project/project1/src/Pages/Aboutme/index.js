import myprofilepic from './Assets/myprofilepic.jpg'
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutme(){
    let [loader,setLoader] = useState(true);
    let [aboutme,setAboutme] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Aboutme')
                                             .then(res=> {
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])


    return(
        <>
        <h2>SAI KUMAR JALLARAPU</h2>
        <img src={myprofilepic} alt="kk" width="250" height="250"/> 


<h1>PERSONAL DETAILS:-<br/>
Gender        :Male<br/>
Date of Birth : 19/06/2000<br/>
Mother Name   : Mangamma<br/>

ADDRESS:-<br/>
Village      : Anisettipally<br/>
Mandal       : Laxmidevipally<br/>
District     : Bhadrdri kothagudem<br/>
State        : Telangana<br/>
Pin Code     : 507101<br/>
Nationality  : Indian</h1><br/>

</>
)
}