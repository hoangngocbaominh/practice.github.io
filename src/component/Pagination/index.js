import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    paginations: PropTypes.object.isRequired,
    changePages: PropTypes.func
};
Pagination.propDefault = {
    changePages: null,
}

function Pagination(props) {
    const {pagination, changePages} = props;
    const {_page, _limit, _totalRows} = pagination;
    // console.log("pagin", pagination);
    const totalPages = Math.ceil(_totalRows / _limit);
    // console.log("totlapages", totalPages);
    const handleChangePages = (newPage) => {
        if(changePages){
            changePages(newPage);
        }
    }
    return (
       <>
       <button disabled={_page <= 1} onClick={() => handleChangePages(_page - 1)}>
           Prev
       </button>
       <button disabled={_page >= totalPages } onClick={() => handleChangePages(_page + 1)}>
           Next 
       </button>
       </>
    );
}

export default Pagination;