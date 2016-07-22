import React, { PropTypes } from 'react';
import { Link } from 'react-router'

const propTypes = {
  details: PropTypes.object.isRequired
};

const ArtistCard = ({ details }) => (
  <li className="col-md-4 text-center msa-list-item">
    <Link to="/albums">
      <span style={{display: 'inline-block', width: '100px', height: '100px', overflow: 'hidden'}}>
        <img style={{height: '100%'}} src={ details.images[0] ? details.images[0].url : 'http://materialicious.com/images/empty-avatar.png' } alt=""/>
      </span>
      <div className="caption">
        { details.name.substr(0, 30) }
      </div>
    </Link>
  </li>
);

ArtistCard.propTypes = propTypes;

export default ArtistCard;
