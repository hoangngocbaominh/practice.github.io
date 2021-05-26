import React, { useState } from "react";
import PropTypes from "prop-types";

AddToDo.propTypes = {
  onSubmit: PropTypes.func,
};
AddToDo.propsDefault = {
  onSubmit: null,
};

function AddToDo(props) {
  const [value, setValue] = useState();
  const { onSubmit } = props;
  const handleOnChange = (e) => {
      console.log(e.target.value);
      setValue(e.target.value);
  }  
  const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(!onSubmit) return;
        const valueSumit = {
            title: value,
        }
        onSubmit(valueSumit);
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange}/>
    </form>
  );
}

export default AddToDo;
