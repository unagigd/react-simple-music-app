import config from '../config';

export const getArtistsUrl = (query, offset = 0, limit = config.artistsLimit) => {
  let replacement = {
      query,
      offset,
      limit
  }
  return config.artistsUrl.replace(
    /:query|:offset|:limit/gi,
    (match) => replacement[match.substr(1)]
  );
}

export const getAlbumsUrl = (id, offset = 0, limit = config.albumsLimit) => {
  let replacement = {
      id,
      offset,
      limit
  }
  return config.albumsUrl.replace(
    /:id|:offset|:limit/gi,
    (match) => replacement[match.substr(1)]
  );
}
