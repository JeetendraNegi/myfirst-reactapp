import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here.');
    const handleUppercaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercaseClick = ()=> {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleOnchange= (event)=>{
        console.log("Onchange.");
        setText(event.target.value);
    }
  return (
      <div className='container my-3'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnchange} rows="6"></textarea>
          </div>
          <button className="btn btn-success mx-2" onClick={handleUppercaseClick}>Convert to uppercase</button>
          <button className="btn btn-success mx-2" onClick={handleLowercaseClick}>Convert to lowercase</button>
          <button className="btn btn-success mx-2">Copy text</button>
          <button className="btn btn-danger mx-2">Delete text</button>
      </div>
  )
}
