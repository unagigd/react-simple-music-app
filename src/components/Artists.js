import React, { PropTypes, Component } from 'react';
import ArtistCard from './ArtistCard';
import Paginator from './Paginator';

const propTypes = {
  list: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  getArtists: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
};

const defaultProps = {
  currentPage: 1,
  isFetching: false,
};

class Artists extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.init(this.props);
  }

  componentWillUpdate(nextProps) {
    let { searchQuery, currentPage } = this.props;
    let { searchQuery: nextQuery, currentPage: nextPage } = nextProps;

    if(searchQuery != nextQuery || currentPage != nextPage) {
      this.init(nextProps);
    }
  }

  shouldComponentUpdate(nextProps) {
    let { searchQuery, currentPage, isFetching } = this.props;
    let { searchQuery: nextQuery, currentPage: nextPage, isFetching: nextIsFetching } = nextProps;

    if(searchQuery != nextQuery || currentPage != nextPage || isFetching != nextIsFetching) {
      return true;
    }
    return false;
  }

  init({ searchQuery, currentPage }) {
    let { getArtists, limit } = this.props;
    getArtists(searchQuery, currentPage, limit);
  }

  render() {
    let { list, limit, currentPage, total, path, isFetching } = this.props;

    return (
      <div className={isFetching ? 'show-loader': ''}>
      { list.length > 0 &&
        <div className="msa-list">
          <ul className="row">
            { list.map(artist => <ArtistCard key={artist.id} details={artist} />) }
          </ul>
          <Paginator limit={limit} path={path} total={total} currentPage={currentPage} />
        </div>
      }
      { !isFetching && list.length == 0 &&
        <div className="alert alert-danger text-center">
          We couldn't find any matching artist
        </div>
      }
      </div>
    )
  }
};

Artists.propTypes = propTypes;
Artists.defaultProps = defaultProps;

export default Artists;
