import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card views ='345' btntext=" hello" />
    <Card views="6467"  btntext="hello"/>
  </StrictMode>,
)
