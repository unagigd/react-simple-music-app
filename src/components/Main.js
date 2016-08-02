import React, { PropTypes, Component } from 'react';
import SearchForm from '../containers/SearchForm';
import config from '../config';

const Main = ({ children, params: {artistId} }) => (
  <div>
    { !artistId && <SearchForm /> }
    { children }
  </div>
);


export default Main;
