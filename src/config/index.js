const config = {
  searchUrl: 'https://api.spotify.com/v1/search?type=artist&q=:query&offset=:offset&limit=:limit',
  artistUrl: 'https://api.spotify.com/v1/artists/:id',
  albumsUrl: 'https://api.spotify.com/v1/artists/:id/albums?offset=:offset&limit=:limit',
  artistsLimit: 9,
  albumsLimit: 9
}

export default config;
