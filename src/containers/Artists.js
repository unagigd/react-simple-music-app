import { connect } from 'react-redux';
import ArtistsComponent from '../components/Artists';
import { fetchArtists } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    artists: state.artists,
    query: state.searchQuery
  }
};

const mapDispatchToProps = {
  fetchArtists
};

const Artists = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsComponent);

export default Artists;
