import { useContext } from "react";
import {OrtakBaglam1} from './contexts/OrtakBaglam1';

function C4({isim}){

const yas=useContext(OrtakBaglam1);

    return(
        <>
        <p>Ben C4 isim:{isim} Yaş:{yas}</p>
        </>
    )
}

export default C4; 