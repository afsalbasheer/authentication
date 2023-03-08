import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  Register  from "./user/Register";
import Home from "./core/home/Home";
import Login from "./user/Login";
import Navbar from "./core/navbar/Navbar";
import Footer from "./core/footer/Footer";

const Router = () =>{
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/register" exact element ={<Register />}/>
                <Route path="/login" exact element = {<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Router;