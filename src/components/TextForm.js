import React, { useState } from "react";

export default function TextForm(props) {
  let handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('UpperCase','success')
  };

  let handleLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  let handleCaps = () => {
    // let newText=text.toLocaleUpperCase()
    // setText(newText)
    let a = text.toLowerCase();
    let newText = a.split(" ").map((currentValue) => {
      let capText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return capText;
    });
    setText(newText.join(" "));
  };

  let handleCopy = () => {
    let newText =document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  let handleSpaces = () => {
    let newText =text.split(/[  ]+/)
    setText(newText.join(" "));
  };

  let handleClear = () => {
    let newText =''
    setText(newText);
  };

  let handleChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  const setMyStyle = {
    color:"white",
    backgroundColor:"black",
  }
  const[myStyle, setmyStyle]=useState({
    color:'white',
    backgroundColor:'#212529'
})

  return (
    <>
      <div className="container">
        <h3 className="mb-3" style={{color:props.mode==='light'?"black":"white"}}>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter your text here"
            onChange={handleChange}
            id="myBox"
            rows="8"
            style={{ color : props.mode === 'light' ? "black" : "white" , backgroundColor : props.mode === 'light' ? "white" : "#212529"}}
          ></textarea>
          <label htmlFor="myBox"></label>
        </div>
        <div className="container">
          <button style={props.mode ==='light' ? {} :myStyle} className="btn btn-primary mx-1 my-1" onClick={handleUp}>Uppercase</button>
          <button style={props.mode ==='light' ? {} :myStyle} className="btn btn-primary mx-1 my-1" onClick={handleLo}>Lowercase</button>
          <button style={props.mode ==='light' ? {} :myStyle} className="btn btn-primary mx-1 my-1" onClick={handleCaps}>Capitalize</button>
          <button style={props.mode ==='light' ? {} :myStyle} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
          <button style={props.mode ==='light' ? {} :myStyle} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove ExtraSpaces</button>
          <button style={props.mode ==='light' ? {} :myStyle} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
        </div> 
      </div>

      <div className="container my-4" style={{ color : props.mode === 'light' ? "black" : "white"}}>
        <h2>Summary</h2>
        <p> {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0? text: "Enter your text to preview"}</p>
      </div>
    </>
  );
}
