import { handleActions } from 'redux-actions';

const artists = handleActions({
  REQUEST_ARTISTS: {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    throw(state, action) {}
  },
  RECEIVED_ARTISTS: {
    next(state, action) {
      const { items } = action.payload.artists;

      return Object.assign({}, state, {
        isFetching: false,
        items
      });
    },
    throw(state, action) {}
  }
}, {
  isFetching: false,
  items: []
});

export default artists;
