import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card views ='345' btntext=" hello" maintext='1st card' />
    <Card views="6467"  btntext="hello" maintext="2nd card"/>
    <Card maintext="3rd card"/>
    <Card views="1M" btntext ="click heujure"/ >
  </StrictMode>,
)
