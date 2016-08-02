import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { artistsAlbumsUrl } from '../config/routes';

const propTypes = {
  details: PropTypes.object.isRequired
};

const ArtistCard = ({ details }) => (
  <li className="col-sm-4 text-center msa-list-item">
    <Link to={artistsAlbumsUrl(details.id)}>
      <span className="thumb">
        <img className="image" src={ details.images[0] ? details.images[0].url : 'http://materialicious.com/images/empty-avatar.png' } alt=""/>
      </span>
      <div className="caption">
        { details.name.substr(0, 30) }
      </div>
    </Link>
  </li>
);

ArtistCard.propTypes = propTypes;

export default ArtistCard;
