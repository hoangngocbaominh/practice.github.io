import React, { useEffect, useRef, useState } from "react";

useMagicColor.propTypes = {};
const handleRandomColor = (curentColor) => {
  const colorList = ["green", "red", "yellow", "blue", "gray"];
  const colorIndex = colorList.indexOf(curentColor);
  let newIndex = colorIndex;
  while (colorIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * colorList.length);
  }
  const color = colorList[newIndex];
  console.log(color)
  return color;
};
function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  useEffect(() => {
    const setColorInterval = setInterval(() => {
      const randomColor = handleRandomColor(colorRef.current);
      setColor(randomColor);
      colorRef.current = randomColor;
    }, 2000);
    return () => {
      clearInterval(setColorInterval);
    };
  });
  
  return color;
}

export default useMagicColor;
