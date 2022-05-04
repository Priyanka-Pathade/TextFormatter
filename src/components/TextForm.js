import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const clearText=()=>{
        let  newText='';
        setText(newText);
    }
    const handleCopy=()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
       // document.getSelection().removeAllRanges();  //after coping the text should not be selected
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
   
    const [text,setText] = useState('');
  //  setText=('New Text');
  return (
      <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h3 className='mb-4'>{props.heading}</h3>
    <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label" >Example text area</label> */}
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'#13466e', color:props.mode==='light'?'black':'white'}} name="myText" value={text} onChange={handleOnChange} rows="5"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTextExtract}>Remove symbols</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Title Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
        {/* <p>{wordCount(text)} words and {text.length} characters</p> */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
