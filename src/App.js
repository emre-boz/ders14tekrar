import React, { useState } from "react";
import C1 from './C1';




function App() {
const [isim,isimGuncelle]=useState("Ahmet Yılmaz");


  return (
    <>
      <C1 v1={isim}/>
    </>
  );
}

export default App; 
