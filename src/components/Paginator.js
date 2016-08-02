import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { paginationUrl } from '../utils';

const propTypes = {
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  path: PropTypes.string.isRequired,
};

const defaultProps = {
  currentPage: 1
};

const Paginator = ({ limit, total, currentPage, path }) => {
  let numberOfPages = limit ? Math.ceil(total/limit) : 0;

  let prevPage = Math.max((currentPage - 1), 1);
  let isPrev = currentPage != prevPage;
  const prevUrl = paginationUrl(path, prevPage);

  let nextPage = currentPage + 1;
  let isNext = nextPage <= numberOfPages;
  const nextUrl = paginationUrl(path, nextPage);

  let showFrom = ((currentPage - 1) * limit) + 1;
  let showTo = Math.min((currentPage * limit), total);

  return (
    <div className="text-center">
      <ul className="pagination">
        { isPrev && <li><Link to={prevUrl}>Prev</Link></li> }
        { !isPrev && <li className="disabled"><span>Prev</span></li> }
        { isNext && <li><Link to={nextUrl}>Next</Link></li> }
        { !isNext && <li className="disabled"><span>Next</span></li> }
      </ul>
      <span className="pagination-summary">showing: {showFrom}-{showTo} of {total}</span>
    </div>
  )
};

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

export default Paginator;
