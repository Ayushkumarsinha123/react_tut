import React,{useState} from "react"


function ColorPicker() {
  const [color, setColor] = useState("#FFFF")

  function handleColor(event) {
    setColor(event.target.value)
  }

  return(
    
    <div className="color_picker_container">
      <h1>Color picker</h1>
    <div className="color_display" style={{backgroundColor: color}}>
      <p>selected color:{color}</p>
      </div>
    
    <label>select a Color:</label>
    <input type="color" value={color} onChange={handleColor}></input>
    </div>
    
  )
}

export default ColorPicker