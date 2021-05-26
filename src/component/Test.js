import React, { useState } from "react";
import { Button } from "antd";
var handleRandomColor = () => {
  const listColor = ["red", "yellow", "green", "orange"];
  const listColorRandom = Math.trunc(Math.random() * 4);
  return listColor[listColorRandom];
};
function ChangeColors() {
    const [color, setColor] = useState(() => {
        const  initalColor = localStorage.getItem('color') || 'pink';
        console.log(initalColor);
        return initalColor;
    });
  var handleClick = () => {
    var newColor = handleRandomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };
  return (
    <Button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      Click vào đây
    </Button>
  );
}

export default ChangeColors;
