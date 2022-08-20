import { useContext } from "react";
import TemaContext from "./contexts/TemaContext";

function Buton({children}){
    const renk= useContext(TemaContext); 

    return(
        <button className={renk}>{children}</button>
    )
}

export default Buton;