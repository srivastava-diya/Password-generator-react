import { useState } from 'react'
import './App.css'
import { Slider } from '@mui/material';
import { GeneratePassword } from "js-generate-password";


function App() {

  const [length, setLength] = useState(16)
  const [number , setNumber] = useState(false)
  const [char, setChar] = useState(false)

  const newpassword = GeneratePassword({
    length: length,
    symbols: char,
    numbers: number,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(newpassword)
      .then(() => alert("Text copied to Clipboard!")) 
      .catch((err) => console.error("Error copying text: ", err));
  };


  return(
    <>
      <h1>Password Generator</h1>
      <div className='container'>

        <div className='input-copy'>
          <input type="text" readOnly style={{ height: 46, width: 400, marginTop: 20, borderRadius: 6, fontSize: 16 }}  value={newpassword}/>
          <button style={{ height: 48, marginTop: 13, marginLeft: 20 }} onClick={handleCopy}>COPY</button>
        </div>

        <div className="sliderbox " style={{ width: 300, marginLeft: 50, marginTop: 20 }}>
          <Slider defaultValue={length} valueLabelDisplay="auto" color='' onChange={(e) => setLength(e.target.value)} /> Password Length : {length}
        </div>

        <div className='checkboxes' style={{ marginLeft: 400, marginTop: -51, display: "flex", gap: "10px", alignItems: "center" }}>
          <input type="checkbox" style={{ width: 20, height: 20}} onClick={()=>{char==false?setChar(true):setChar(false)}} />Charcters
          <input type="checkbox" style={{ width: 20, height: 20 }} onClick={() => {number==false?setNumber(true):setNumber(false) }} />Numbers
        </div>

      </div>
    </>
  )
}

export default App
