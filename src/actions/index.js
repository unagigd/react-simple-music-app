import { createAction } from 'redux-actions';
import config from '../config';

const getJSON = (url) => {
  return window.fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    let errorMessage = 'An error occurred. Please try again later.';
    throw new Error(errorMessage);
  });
}

const getArtists = (query) => {
  const url = `${config.artistsUrl}${query}`;
  return getJSON(url);
}

const getAlbums = (id) => {
  const url = config.albumsUrl.replace(':id', id);
  return getJSON(url);
}

const fetchArtists = (query) => (dispatch) => {
  dispatch(createAction('REQUEST_ARTISTS')());
  getArtists(query).then(
    data => dispatch(createAction('RECEIVED_ARTISTS')(data))
  );
}

export const fetchAlbums = (id) => (dispatch) => {
  dispatch(createAction('REQUEST_ALBUMS')());
  getAlbums(id).then(
    data => dispatch(createAction('RECEIVED_ALBUMS')(data))
  );
}

export const submitQuery = (query) => (dispatch) => {
    dispatch(createAction('SET_QUERY')(query));
    dispatch(fetchArtists(query));
}
