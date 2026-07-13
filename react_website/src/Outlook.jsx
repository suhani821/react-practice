import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Outlet } from "react-router-dom";
function Outlook(){
    return(<>
        
        <Header />
        <Outlet/>
        <Footer />

        </> 
    );
}
export default Outlook;