import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Btn from './components/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Btn txt="blue"/>
    <Btn txt="yellow"/>
    <Btn txt="red"/>
<Btn    txt="green"/>
<Btn txt="purple"/>
    <Btn/>
    
  </StrictMode>
)
