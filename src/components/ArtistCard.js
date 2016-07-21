import React, { PropTypes } from 'react';

const propTypes = {
  details: PropTypes.object.isRequired
};

const ArtistCard = ({ details }) => (
  <li>
    <a href="">
      <div style={{width: '100px', height: '100px', backgroundColor: '#000'}}></div>
      { details.name }
    </a>
  </li>
);

ArtistCard.propTypes = propTypes;

export default ArtistCard;
