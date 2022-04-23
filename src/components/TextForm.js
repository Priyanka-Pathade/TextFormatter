import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("Uppercase was changed");
        setText(event.target.value);
    }
  
    const clearText=()=>{
        let  newText='';
        setText(newText);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const [text,setText] = useState('');
  //  setText=('New Text');
  return (
      <>
    <div>
      <h1>{props.heading}</h1>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label" >Example text area</label>
        <textarea className="form-control" id="myBox" name="myText" value={text} onChange={handleOnChange} rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>


    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
