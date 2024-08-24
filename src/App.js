import React, { useState } from 'react'
import './App.css';

import Navbar from './Components/Navbar';
//import About from './Components/about';
import Textform from './Components/textform';
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode =()=>{
    if(mode ==="light"){
      setMode("dark");
    } 
    else{
      setMode("light");
    }
  }
  return (
    <div className="App">
        <Navbar title="Textutils" aboutText = "About TextUtils" mode={mode} toggleMode= {toggleMode}/>
        <div className='container my-3'>
        <Textform heading="Enter the text here" />
        {/* <About/> */}
        </div>
    </div>
  );
}


export default App;
