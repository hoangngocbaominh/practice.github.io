import React from "react";
import useClock from "../../Hooks/useClock";


function Clock(props) {
  const {timeString} = useClock();
  return (
    <>
      <p style={{ fontSize: "25" }}>{timeString}</p>
    </>
  );
}

export default Clock;
