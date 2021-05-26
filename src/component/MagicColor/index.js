import React from "react";
import PropTypes from "prop-types";
import useMagicColor from "../../Hooks/useMagicColor";
import "../MagicColor/magicColor.css";

MagicColor.propTypes = {};

function MagicColor(props) {
  const color = useMagicColor();
  return <div style={{ backgroundColor: color }} className="magic-color"></div>;
}

export default MagicColor;
