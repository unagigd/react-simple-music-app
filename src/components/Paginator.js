import React, { PropTypes } from 'react';

const propTypes = {
};

const Paginator = ({ onPageChange, query, isPrev, isNext, offset, limit, total }) => {

  const prevPage = (e) => {
    e.preventDefault();
    let newOffset = offset - limit;
    onPageChange(query, newOffset > 0 ? newOffset : 0);
  };

  const nextPage = (e) => {
    e.preventDefault();
    let newOffset = offset + limit;
    if(newOffset < total) {
      onPageChange(query, newOffset);
    }
  };

  return (
    <ul className="pagination">
      <li className={ isPrev ? "" : "disabled" }><a href="#" onClick={prevPage}>Prev</a></li>
      <li className={ isNext ? "" : "disabled" }><a href="#" onClick={nextPage}>Next</a></li>
    </ul>
  )
};

Paginator.propTypes = propTypes;

export default Paginator;
