import { connect } from 'react-redux';
import ArtistsComponent from '../components/Artists';
import { getArtists } from '../actions';
import config from '../config';
import { searchArtistUrl } from '../config/routes';

const mapStateToProps = (state, props) => {

  let { results, isFetching, total } = state.artists;
  let { page = 1, searchQuery } = props.params;

  let path = searchArtistUrl(searchQuery);

  let list = results[searchQuery] && results[searchQuery][page]
    ? results[searchQuery][page]
    : [];

  return {
    list,
    searchQuery,
    currentPage: parseInt(page),
    limit: config.artistsLimit,
    isFetching,
    total,
    path,
  }
};

const mapDispatchToProps = {
  getArtists
};

const Artists = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsComponent);

export default Artists;
