import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import artists from './artists';
import albums from './albums';

const reducers = combineReducers({
  searchQuery,
  artists,
  albums,
});

export default reducers;
