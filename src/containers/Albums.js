import { connect } from 'react-redux';
import AlbumsComponent from '../components/Albums';
import { fetchAlbums, fetchArtist } from '../actions';
import config from '../config';
import { artistsAlbumsUrl, searchArtistUrl } from '../config/routes';

const mapStateToProps = (state, props) => {

  let { results, isFetching, total } = state.albums;
  let { page = 1, artistId } = props.params;
  let { searchQuery, artists: { currentArtist, isFetching: currentArtistIsFetching } } = state;

  let path = artistsAlbumsUrl(artistId);
  let backUrl = searchQuery ? searchArtistUrl(searchQuery) : '/';

  let list = results[artistId] && results[artistId][page]
    ? results[artistId][page]
    : [];

  return {
    list,
    artistId,
    limit: config.albumsLimit,
    total,
    path,
    backUrl,
    currentArtist,
    currentArtistIsFetching,
    isFetching,
    searchQuery,
    currentPage: parseInt(page),
  }
};

const mapDispatchToProps = {
  fetchAlbums,
  fetchArtist,
};

const Albums = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsComponent);

export default Albums;
