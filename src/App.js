import React, { useState } from "react";
import C1 from './C1';
import {OrtakBaglam1} from './contexts/OrtakBaglam1';




function App() {
const [isim,isimGuncelle]=useState("Ahmet Yılmaz");
const [yas,yasGuncelle]=useState(35);


  return (
    <>
    <OrtakBaglam1.Provider value={yas}>
      <C1 v1={isim}/>
      </OrtakBaglam1.Provider>
    </>
  );
}

export default App; 

