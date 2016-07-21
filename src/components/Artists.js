import React, { PropTypes } from 'react';
import ArtistCard from './ArtistCard';

const propTypes = {
  artists: PropTypes.array.isRequired
};

const Artists = ({ artists }) => (
  <div>
    <ul>
      { artists.map(artist => <ArtistCard key={artist.id} details={artist} />) }
    </ul>
  </div>
);

Artists.propTypes = propTypes;

export default Artists;
