import React from "react";
import Login from "./pages/Login.jsx"
import Contracts from "./pages/Contracts.jsx"
import Invoice from "./pages/Invoice.jsx"
import Details from "./pages/Details.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/contracts/:cnpj" element={<Contracts/>}></Route>
        <Route path="/invoice/:contractId" element={<Invoice/>}></Route>
        <Route path="/details/:contractId" element={<Details/>}></Route>
      </Routes>
   </Router>
  )
}

export default AppRoutes;
