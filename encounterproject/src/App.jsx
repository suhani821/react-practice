import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter,setCounter]=useState(7);
function addval(){
  if(counter<20){counter = counter+1;}
  
  setCounter(counter);
}
function decval(){
  if(counter>=0){
   setCounter(counter--);
  }
  
  
}
return(<>
 <h1>hello world!</h1>
 <p> counter value {counter}</p>
 <button onClick={addval}>increase value {counter}</button>
 <br />
 <button onClick={decval}>decrease value{counter}</button>
  </>
 );
    
  
}

export default App
