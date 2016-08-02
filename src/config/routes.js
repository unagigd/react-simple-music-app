import * as Utils from '../utils';

export const paths = {
  'search-artist': 'search-artist/:searchQuery(/:page)',
  'artist-albums': ':artistId/albums(/:page)',
}

export const searchArtistUrl = (query, page = 1) => {
  let replacement = {
      ':searchQuery': Utils.slugify(query),
      '(/:page)': page && page > 1 ? `/${page}` : '',
  }

  return paths['search-artist'].replace(
    /:searchQuery|\(\/:page\)/gi,
    (match) => replacement[match]
  );
}

export const artistsAlbumsUrl = (artistId, page = 1) => {
  let replacement = {
      ':artistId': artistId,
      '(/:page)': page && page > 1 ? `/${page}` : '',
  }

  return paths['artist-albums'].replace(
    /:artistId|\(\/:page\)/gi,
    (match) => replacement[match]
  );
}
