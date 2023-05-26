import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Skills(){
    let [loader,setLoader] = useState(true);
    let [Skills,setSkills] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Skills')
                                             .then(res=> {
                                                console.log(res.data);
                                                setSkills(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])

    return(
        <>
    

    <h1>TECHNICAL SKILLS:-<br/>
	  Python<br/>
	  Knowledge on OOPS <br/>
	  Django <br/>
	  Basics on SQL</h1><br/>



        </>
    )
}