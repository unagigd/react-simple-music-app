import { handleActions } from 'redux-actions';
import config from '../config';

const artists = handleActions({
  'REQUEST_ARTISTS': {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    throw(state, action) {}
  },
  'RECEIVED_ARTISTS_FROM_CACHE': {
    next(state, action) {      
      return Object.assign({}, state, {
        isFetching: false
      });
    },
    throw(state, action) {}
  },
  'RECEIVED_ARTISTS': {
    next(state, action) {
      let { items, total } = action.payload.data.artists;
      let querySlug = action.payload.querySlug;
      let page = action.payload.page;

      let singleResult = Object.assign({}, state.results[querySlug], {
        [page]: items
      });

      let results = Object.assign({}, state.results, {
        [querySlug]: singleResult
      });

      return Object.assign({}, state, {
        isFetching: false,
        results,
        total,
      });
    },
    throw(state, action) {}
  },
  'REQUEST_ARTIST': {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    throw(state, action) {}
  },
  'RECEIVED_ARTIST': {
    next(state, action) {
      return Object.assign({}, state, {
        isFetching: false,
        currentArtist: action.payload,
      });
    },
    throw(state, action) {}
  }
}, {
  isFetching: false,
  results: {},
  currentArtist: {},
  total: 0,
});

export default artists;
