import React from 'react';
import { Route } from 'react-router';
import Main from './Main';
import Artists from '../containers/Artists';
import Albums from '../containers/Albums';
import { paths } from '../config/routes';

const Routes = (
  <Route path="/" component={Main}>
    <Route path={paths['search-artist']} component={Artists} />
    <Route path={paths['artist-albums']} component={Albums} />
  </Route>
);

export default Routes;
