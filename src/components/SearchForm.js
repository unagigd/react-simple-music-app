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
      <form action="" onSubmit={submit}>
        <input type="text" placeholder="Search artist" ref={node => query = node} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
};

SearchForm.propTypes = propTypes;

export default SearchForm;
