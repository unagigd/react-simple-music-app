import React, { PropTypes } from 'react';
import ArtistCard from './ArtistCard';
import Paginator from './Paginator';

const propTypes = {
  artists: PropTypes.object.isRequired
};

const Artists = ({ artists, query, fetchArtists }) => {
  let { items } = artists;
  return (
    <div className="msa-list">
      <ul className="row">
        { items.map(artist => <ArtistCard key={artist.id} details={artist} />) }
      </ul>
      { items.length > 0 && <Paginator onPageChange={fetchArtists} query={query} {...artists} /> }
    </div>
  )
};

Artists.propTypes = propTypes;

export default Artists;
