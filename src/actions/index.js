import { createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { hashHistory } from 'react-router'
import { getSearchUrl, getAlbumsUrl, getArtistUrl, countCurrentPage, slugify } from '../utils';
import { searchArtistUrl } from '../config/routes';


const getJSON = (url) => {
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    let errorMessage = 'An error occurred. Please try again later.';
    throw new Error(errorMessage);
  });
}

export const fetchArtist = (id) => (dispatch, getState) => {

  if(getState().artists.currentArtist.id == id) return;

  let url = getArtistUrl(id);

  dispatch(createAction('REQUEST_ARTIST')());
  getJSON(url).then(
    data => dispatch(createAction('RECEIVED_ARTIST')(data))
  );
}

export const fetchArtists = (query, page, limit) => (dispatch, getState) => {
  let url = getSearchUrl(query, page, limit);
  let querySlug = slugify(query);
  let storedData = getState().artists.results[querySlug];

  dispatch(createAction('REQUEST_ARTISTS')());

  if(storedData && storedData[page]) {
    dispatch(createAction('RECEIVED_ARTISTS_FROM_CACHE')());
    return;
  }

  getJSON(url).then(
    data => dispatch(createAction('RECEIVED_ARTISTS')({
      data,
      page,
      querySlug,
    }))
  );
}

export const fetchAlbums = (id, page, limit) => (dispatch) => {
  let url = getAlbumsUrl(id, page, limit);

  dispatch(createAction('REQUEST_ALBUMS')());
  getJSON(url).then(
    data => dispatch(createAction('RECEIVED_ALBUMS')({
      data,
      page,
      id,
    }))
  );
}

export const submitArtistsQuery = (query, page, limit) => (dispatch, getState) => {
  let url = searchArtistUrl(query, page, limit);
  hashHistory.push(url);
}

export const getArtists = (query, page, limit) => (dispatch, getState) => {
  if(query != getState().searchQuery) {
    dispatch(createAction('SET_QUERY')(query));
  }
  dispatch(fetchArtists(query, page, limit));
}
