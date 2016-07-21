import { handleActions } from 'redux-actions';

const albums = handleActions({
  REQUEST_ALBUMS: {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    throw(state, action) {}
  },
  RECEIVED_ALBUMS: {
    next(state, action) {
      const { items } = action.payload;
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

export default albums;
