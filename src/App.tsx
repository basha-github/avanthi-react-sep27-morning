//import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./mycomponents/Login";
import Home from "./mycomponents/Home";
import KnowUS from "./mycomponents/KnowUS";
import Products from "./mycomponents/Products";

export default function App() {
  return (
    <div>
<BrowserRouter>
<Routes>

  <Route path="/" element={<Login />}/>
  <Route path="/home"  element={<Home />}/>
  <Route path="/abt" element={<KnowUS />}/>
  <Route  path="/prd" element={<Products />}/>
</Routes>

</BrowserRouter>


    </div>
  )
}
