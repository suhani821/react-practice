import React from "react";
import Header from "'./components/header/Header.jsx"
import Footer from "./componetns/footer/Footer.jsx"
import { Outlet } from "react-router";
function Outlook(){
    return(<>
        
        <Header />
        <Outlook/>
        <Footer />

        </> 
    );
}
export default Outlook;