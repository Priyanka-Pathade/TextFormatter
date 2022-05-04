import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
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
        props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed","success");

    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleTextExtract =()=>{      //it allows only alphanumeric and forward slash(/)
        const regex = /[0-9/A-Z/a-z/ /]/g;
        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1);
        props.showAlert("Removed all symbols except '/'","success");
        };
    const handleTitleCase = () => {
            let newText = text.split(" ").map((currentValue) => {
                let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
                return newText;
            });
            setText(newText.join(" "));
            props.showAlert("Converted to title case","success");
        }
    function wordCount(content){
            if(content===""){
              return 0;
            }
            let arr = content.split(" ");
            let len = arr.length;
            let count=0;
            
            for(let i=0;i<len;i++){
              if(arr[i]==='' || arr[i]===' '){
                 count++;
              }
            }
            return len-count;
          }
    const [text,setText] = useState('');
  //  setText=('New Text');
  return (
      <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label" >Example text area</label>
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} name="myText" value={text} onChange={handleOnChange} rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleTextExtract}>Remove symbols</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Title Case</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
    <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{wordCount(text)} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
