import { handleAction } from 'redux-actions';

const searchQuery = handleAction(
  'SET_QUERY',
  (state, action) => action.payload,
  '');

export default searchQuery;
