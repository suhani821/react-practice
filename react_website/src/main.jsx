import React from "react";
import './index.css'
import Home from './components/home/Home.jsx'
import About from './components/aboutUs/Aboutus.jsx'
import Contact from "./components/contactus/Contactus.jsx";
import ReactDOM from "react-dom/client";
import Outlook from "./Outlook.jsx"
import App from './App.jsx'
import Github ,{Githubdata} from "./components/github.jsx";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlook/>}>
<Route path="/" element={<Home/>}/>
<Route path="About" element={<About/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="Github" element={<Github/>} loader={Githubdata}/>
<Route path="App/:user_id" element={<App/>}/>

  </Route>
  )

)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);