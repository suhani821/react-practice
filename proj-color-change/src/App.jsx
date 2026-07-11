import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  let [color , colorset]=useState("green");
  return (
   <div className="w-full h-screen flex justify-center"
   style={{backgroundColor:color}}>
    <div className=" fixed flex flex-wrap justify-center bottom-5 px-3 py-5 insert-x-0  " >
     <div  className='flex flex-wrap justify-center bg-blue-500  py-6 px-5 rounded-2xl gap-3'>
      <button className='bg-yellow-500 rounded-3xl p-3 ' onClick={()=>{colorset("yellow")}} >yellow</button>
            <button className='bg-red-500 rounded-3xl p-3 ' onClick={()=>{colorset("red")}} >red</button>
      <button className='bg-olive-500 rounded-3xl p-3 ' onClick={()=>{colorset("olive")}} >olive</button>
      <button className='bg-green-500 rounded-3xl p-3 ' onClick={()=>{colorset("green")}} >green</button>
      <button className='bg-violet-500 rounded-3xl p-3 ' onClick={()=>{colorset("violet")}} >violet</button>
      <button className='bg-white rounded-3xl p-3 ' onClick={()=>{colorset("white")}} >white</button>
      <button className='bg-pink-500 rounded-3xl p-3 ' onClick={()=>{colorset("pink")}} >pink</button>
      <button className='bg-black rounded-3xl p-3 text-white ' onClick={()=>{colorset("black")}} >black</button>

     </div>
    </div>
   </div>
  );
}

export default App;