import { connect } from 'react-redux';
import ArtistsComponent from '../components/Artists';

const mapStateToProps = (state, props) => {
  return {
    artists: state.artists.items
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {}
};

const Artists = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsComponent);

export default Artists;
