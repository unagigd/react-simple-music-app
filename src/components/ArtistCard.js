import React, { PropTypes } from 'react';

const propTypes = {
  details: PropTypes.object.isRequired
};

const ArtistCard = ({ details }) => (
  <li>
    <a href="">
      { details.images[0] && <img src={ details.images[0].url } alt=""/> }
      { !details.images[0] && <div style={{width: '100px', height: '100px', backgroundColor: '#000'}}></div> }
      { details.name }
    </a>
  </li>
);

ArtistCard.propTypes = propTypes;

export default ArtistCard;
