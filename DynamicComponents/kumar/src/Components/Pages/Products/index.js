import Navbar from "../../Navbar"
export default function Products(){
    const ppages=['Autocomplete','Checkbox','Badge'];
    return(
        <>
        <Navbar pages={ppages} bgcolor="green" buttoncolor="pink"/>
        </>
    )
}