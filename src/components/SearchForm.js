import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const SearchForm = ({ onSubmit }) => {
  let query;

  const submit = (e) => {
    e.preventDefault();
    onSubmit(query.value);
    query.value = '';
  };

  return (
    <div>
      <form action="" onSubmit={submit} className="form-inline text-center">
        <div className="form-group">
          <input type="text" placeholder="Search artist" ref={node => query = node} className="form-control input-lg" />
          <input type="submit" value="Search" className="btn btn-lg btn-primary" />
        </div>
      </form>
    </div>
  )
};

SearchForm.propTypes = propTypes;

export default SearchForm;
