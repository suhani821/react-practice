import { useState, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { resumeAndPrerenderToNodeStream } from 'react-dom/static'

function App() {
  const [length, setlength] = useState(7);
  const [password, setpassword] = useState();
  const [charAllowed, setcharAllowed] = useState(false);
  const [numAllowed, setnumAllowed] = useState(false);
function Copytokeyboard(){
  passwordref.current.select()
  passwordref.current.setSelectionRange(0,2)

  window.navigator.clipboard.writeText(password)
}
const passwordref = useRef("null")
  function Passwordgenerator() {
    let pass="";
    let str = "AaBbCcDdEeFfGgHhIiJkLlMmNnOoPpQqRrSsTtUuVwWxXyYyZz"
    if (charAllowed) {
      str += "!@#$%^&*()_+~|}{[]:;?><,./-=";
    }
    if (numAllowed) {
      str += "0123456789";

    }
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length ))
    }
    setpassword(pass)
  }



  //using useEffect for recalling passwprdgenerator if lenght, char, num changes.
  useEffect(() => { Passwordgenerator() }, [length, charAllowed, numAllowed])
  return (
    <div className='w-full h-screen bg-yellow-500 py-12 border-2' >
      <div className='  flex justify-center gap-10 ' >
        <input 
        type="text"
        placeholder='password'
        value={password}
        ref={passwordref}
        readOnly
        className='border-3 mx-4 rounded-2xl px-2'
          />
        <button className="bg-blue-500  border-2xl p-1 px-4 rounded-2xl"
        onClick={Copytokeyboard }
        >copy</button>
      </div>
      <div className='flex justify-center my-10 '>
         <div>
          <input type="range"
          
          max="20"
          min ="6"

          onChange={(e)=>{setlength(e.target.value)}}
           />
           <label htmlFor="" > length:{length}</label>
         </div>

        <div className=' px-10'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          
          onChange={()=>{
            setnumAllowed((prev)=>!prev)
          }}
          name="numbers" id="" />
        <label htmlFor="" className=''> numbers</label>
        </div>
                <div>
         <input type="checkbox"
          defaultChecked={charAllowed}
          
          onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}
          name="character" id="" />
        <label htmlFor="" className=''> characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
