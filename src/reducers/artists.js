import { handleActions } from 'redux-actions';
import config from '../config';

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
      let {
        items,
        next,
        previous: prev,
        total,
        offset
      } = action.payload.artists;

      return Object.assign({}, state, {
        isFetching: false,
        items,
        isNext: next !== null,
        isPrev: prev !== null,
        total,
        offset
      });
    },
    throw(state, action) {}
  }
}, {
  isFetching: false,
  items: [],
  isNext: false,
  isPrev: false,
  total: 0,
  offset: 0,
  limit: config.artistsLimit
});

export default artists;
