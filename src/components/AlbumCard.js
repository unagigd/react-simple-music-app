import React, { PropTypes } from 'react';

const propTypes = {
  details: PropTypes.object.isRequired
};

const AlbumCard = ({ details }) => (
  <li className="col-sm-4 text-center msa-list-item">
    <span className="thumb">
      <img className="image" src={ details.images[0] ? details.images[0].url : 'http://materialicious.com/images/empty-avatar.png' } alt=""/>
    </span>
    <div className="caption">
      { details.name.substr(0, 30) }
    </div>
  </li>
);

AlbumCard.propTypes = propTypes;

export default AlbumCard;
