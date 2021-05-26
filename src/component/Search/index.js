import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

Search.propTypes = {
  submitFunc: PropTypes.func,
};
Search.propsDefault = {
  submitFunc: null,
};
function Search(props) {
  const [serchTerm, setSearchTerm] = useState();
  const { submitFunc } = props;
  const valueCurentRef = useRef();
  const handleOnChange = (e) => {
    const value = e.target.value;
    
    setSearchTerm(value)
    if (valueCurentRef.current) {
      clearTimeout(valueCurentRef.current);
    }
    valueCurentRef.current = setTimeout(() => {
        const formValue={
            searchTerm: value
        }
      submitFunc(formValue);
    }, 300);
  };
  return (
    <div>
      <form>
        <input type="text" value={serchTerm} onChange={handleOnChange} />
      </form>
    </div>
  );
}

export default Search;
