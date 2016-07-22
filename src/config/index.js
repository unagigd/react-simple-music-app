const config = {
  artistsUrl: 'https://api.spotify.com/v1/search?type=artist&q=:query&offset=:offset&limit=:limit',
  albumsUrl: 'https://api.spotify.com/v1/artists/:id/albums',
  artistsLimit: 9,
  albumsLimit: 9
}

export default config;
