import React, { PropTypes, Component } from 'react';
import AlbumCard from './AlbumCard';
import Paginator from './Paginator';
import { Link } from 'react-router';

const propTypes = {
  list: PropTypes.array.isRequired,
  artistId: PropTypes.string.isRequired,
  fetchAlbums: PropTypes.func.isRequired,
  fetchArtist: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentArtist: PropTypes.object,
  currentArtistIsFetching: PropTypes.bool,
  isFetching: PropTypes.bool,
  searchQuery: PropTypes.string,
};

const defaultTypes = {
  currentArtist: {},
  searchQuery: '',
  currentPage: 1,
  isFetching: false,
}

class Albums extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.fetched = false;
    this.init(this.props);
  }

  componentWillUpdate(nextProps) {
    let { artistId, currentPage } = this.props;
    let { artistId: nextArtistId, currentPage: nextPage } = nextProps;

    if(artistId != nextArtistId || currentPage != nextPage) {      
      this.init(nextProps);
    }
  }

  shouldComponentUpdate(nextProps) {
    let { artistId, currentPage, isFetching } = this.props;
    let { artistId: nextArtistId, currentPage: nextPage, isFetching: nextIsFetching } = nextProps;
    let fetched = isFetching && !nextIsFetching;

    this.fetched = false;
    if(artistId != nextArtistId || currentPage != nextPage || fetched) {
      if(fetched) {
        this.fetched = true;
      }
      return true;
    }
    return false;
  }

  init({ artistId, currentPage }) {
    let { fetchAlbums, fetchArtist, limit } = this.props;
    fetchArtist(artistId);
    fetchAlbums(artistId, currentPage);
  }

  render() {
    let { list, limit, currentPage, total, path, backUrl, currentArtist } = this.props;

    return (
      <div>
        <header className="clearfix">
          <Link className="btn btn-primary pull-left back-btn" to={backUrl}>Back</Link>
          <h1 className="text-center">{currentArtist && currentArtist.name}</h1>
        </header>
      { list.length > 0 &&
        <div className="msa-list">
          <ul className="row">
            { list.map(album => <AlbumCard key={album.id} details={album} />) }
          </ul>
          <Paginator limit={limit} path={path} total={total} currentPage={currentPage} />
        </div>
      }
      { this.fetched && list.length == 0 &&
        <div className="alert alert-danger text-center">
          We couldn't find any albums
        </div>
      }
      </div>
    )
  }
}

Albums.propTypes = propTypes;
Albums.defaultTypes = defaultTypes;

export default Albums;
