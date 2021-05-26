import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted or updated");
  });
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;
