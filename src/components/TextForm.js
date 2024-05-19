import React, { useState } from 'react'

export default function TextForm(props) {

    const [originalText, setOriginalText] = useState('');
    const [text, setText] = useState('');
    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     background: 'white'
    // });

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             background: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             background: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleOnClickOriginal = () => {
        setText(originalText);
        props.showAlert("Converted to original", "success");
    }
    const handleOnClickUpper = () => {
        // console.log("Uppercase is clicked" + text)
        setOriginalText(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnClickLower = () => {
        setOriginalText(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnClickUpperFirst = () => {
        setOriginalText(text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Converted to upperfirst!", "success");
    }
    const handleOnClickClear = () => {
        setOriginalText(text);
        let newText = '';
        setText(newText);
        props.showAlert("Converted to clean!", "success");
    }

    const handleOnClickSpeak = () => {
        // setOriginalText(text);
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Converted to speach!", "success");
      }
      
  return (
    <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.headers}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'blue':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickOriginal}>Original text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickUpper}>UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickLower}>lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickUpperFirst}>FirstUpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickClear}>Clear All</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickSpeak}>Speak</button>
                {/* <div onClick={toggleStyle} className="btn btn-primary mx-1">{btnText}</div> */}
                {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button> */}

        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            {/* <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p> */}
            <p>{0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        </div>
        <h2 style={{color: props.mode === 'dark'?'white':'black'}}>Preview</h2>
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.length>0?text:"Enter some text in above box"}</p>
    </>
  )
}