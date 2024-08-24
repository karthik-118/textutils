import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
   const handleClearClick=()=>{
    console.log("Clear was Clicked" + text);
    setText(" ");
  }
  const handleCopyClick=()=>{
    console.log("Copy was Clicked" + text);
    var text = document.getElementById("myBox");
    text.select();
    setText("");
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange=(event)=>{
    console.log("onChange was clicked");
    setText(event.target.value);
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
  }
  const [text,setText] = useState('Enter text here');
  return (  
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="myText" mb="3">
    <textarea className="form-control" value={text} rows="3" onChange={handleOnChange} id="myBox" ></textarea>
</div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick} mb ="3">Convert To UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoClick} mb ="3">Convert To LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick} mb ="3">Clear Text</button>
    <button className='btn btn-primary mx-2' onClick={handleCopyClick} mb ="3">Copy Text</button>
    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces} mb ="3">Remove Extra Spaces</button>
</div>  
    <div className="container my-3">
       <h1>Your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} charaters</p>
       <p>{0.008 * text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
  )
}
