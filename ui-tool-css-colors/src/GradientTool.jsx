import React, { useState, useEffect } from 'react';
import './style.css';


function GradientTool() {
    const [angle, setAngle] = useState(0);
    const [color1, setColor1] = useState('#FFFF00');
    const [color2, setColor2] = useState('#000000');
  
    const handleChangeAngle = (e) => {
      setAngle(e.target.value);
    };
  
    const handleChangeColor1 = (e) => {
      setColor1(e.target.value);
    };
  
    const handleChangeColor2 = (e) => {
      setColor2(e.target.value);
    };
  
    return (
      <div className="container">
        <h1>Gradient Generator</h1>
        <div className="gradient-preview" style={{ background: `linear-gradient(${angle}deg, ${color1}, ${color2})` }}></div>
        <div className="input-group">
          <label>Angle:</label>
          <input type="number" value={angle} onChange={handleChangeAngle} />
        </div>
        <div className="input-group">
          <label>Color 1:</label>
          <input type="color" value={color1} onChange={handleChangeColor1} />
        </div>
        <div className="input-group">
          <label>Color 2:</label>
          <input type="color" value={color2} onChange={handleChangeColor2} />
        </div>
        <button className="btn">Generate Code</button>
        <div className="code-box">
          <textarea readOnly value="background: linear-gradient(50deg, #FFFF00 , #000000);
          -moz-background: linear-gradient(50deg, #FFFF00 , #000000); 
          -webkit: linear-gradient(50deg, #FFFF00 , #000000);" />
        </div>
      </div>
    );
  }

export default GradientTool;

