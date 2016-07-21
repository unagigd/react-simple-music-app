import React from 'react';
import Artists from './Artists';
import SearchForm from '../containers/SearchForm';

const list = [
  // {
  //   id: 1,
  //   name: 'Artist 1'
  // }
];

const MusicApp = () => (
  <div>
    <SearchForm />
    <Artists artists={list} />
  </div>
);

export default MusicApp;
