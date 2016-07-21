import { createAction } from 'redux-actions';

export const setQuery = (query) => (dispatch, getState) => {
    dispatch(createAction('SET_QUERY')(query));
}

// export const getArtists = () => (dispatch, getState) => {
//
// }
