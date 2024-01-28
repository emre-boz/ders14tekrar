import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Card9 from "./Card9";
import Emre from "./Emre";
import Kerim from "./Kerim";
import Slider from "./Slider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <Emre />
    {/* <Card9 /> */}
    <Kerim />
    <Slider />
    <div style={{width:"100%",height:'200px'}}></div>
  </>
);
