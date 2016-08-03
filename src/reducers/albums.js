import { handleActions } from 'redux-actions';

const albums = handleActions({
  'REQUEST_ALBUMS': {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    throw(state, action) {}
  },
  'RECEIVED_ALBUMS_FROM_CACHE': {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: false
      });
    },
    throw(state, action) {}
  },
  'RECEIVED_ALBUMS': {
    next(state, action) {
      let { items, total } = action.payload.data;
      let id = action.payload.id;
      let page = action.payload.page;

      let singleResult = Object.assign({}, state.results[id], {
        [page]: items
      });

      let results = Object.assign({}, state.results, {
        [id]: singleResult
      });

      return Object.assign({}, state, {
        isFetching: false,
        results,
        total,
      });
    },
    throw(state, action) {}
  }
}, {
  isFetching: false,
  results: {},
  total: 0,
});

export default albums;
