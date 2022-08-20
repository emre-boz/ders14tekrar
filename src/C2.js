import C3 from './C3';
import { useContext } from "react";
import {OrtakBaglam1} from './contexts/OrtakBaglam1';

function C2(props){
    const yas=useContext(OrtakBaglam1);
    return(
        <>
        <p>Ben C2 {yas} </p>
        <C3 prop1={props.isim}/>
        
        </>
    )
}

export default C2;