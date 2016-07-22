import { createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { getArtistsUrl, getAlbumsUrl } from '../utils';

const getJSON = (url) => {
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    let errorMessage = 'An error occurred. Please try again later.';
    throw new Error(errorMessage);
  });
}

export const fetchArtists = (query, offset, limit) => (dispatch) => {
  let url = getArtistsUrl(query, offset, limit);

  dispatch(createAction('REQUEST_ARTISTS')());
  getJSON(url).then(
    data => dispatch(createAction('RECEIVED_ARTISTS')(data))
  );
}

export const fetchAlbums = (id, offset, limit) => (dispatch) => {
  let url = getAlbumsUrl(id, offset, limit);

  dispatch(createAction('REQUEST_ALBUMS')());
  getJSON(url).then(
    data => dispatch(createAction('RECEIVED_ALBUMS')(data))
  );
}

export const submitQuery = (query) => (dispatch) => {
    dispatch(createAction('SET_QUERY')(query));
    dispatch(fetchArtists(query));
}
