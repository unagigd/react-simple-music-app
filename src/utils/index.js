import config from '../config';

export const getArtistUrl = (id) => {
  let replacement = {
      id
  }
  return config.artistUrl.replace(
    /:id/gi,
    (match) => replacement[match.substr(1)]
  );
}

export const getSearchUrl = (query, page = 1, limit = config.artistsLimit) => {
  let replacement = {
      query,
      offset: (page - 1) * limit,
      limit
  }
  return config.searchUrl.replace(
    /:query|:offset|:limit/gi,
    (match) => replacement[match.substr(1)]
  );
}

export const getAlbumsUrl = (id, page = 1, limit = config.albumsLimit) => {
  let replacement = {
      id,
      offset: (page - 1) * limit,
      limit
  }
  return config.albumsUrl.replace(
    /:id|:offset|:limit/gi,
    (match) => replacement[match.substr(1)]
  );
}

export const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\wąćęłńóśźżĄĆĘŁŃÓŚŻŹ\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export const paginationUrl = (path, page) => {
  let url = path;

  if(page > 1) {
    url = `${url}/${page}`;
  }
  return url;
}
