import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ stars, myRating }) => {
  const [newRating, setNewRating] = useState(null || myRating);
  const [isHovered, setIsHovered] = useState(null);

  if (newRating && newRating > 0 && newRating <= 5) stars = newRating;
  if (isHovered && isHovered > 0 && isHovered <= 5) stars = isHovered;

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          onMouseEnter={() => setIsHovered(i)}
          onMouseLeave={() => setIsHovered(null)}
          onClick={e => {
            e.preventDefault();
            setNewRating(i);
          }}
        >
          {i <= stars ? (
            <FontAwesomeIcon
              className={newRating || isHovered ? styles.setRating : ''}
              icon={faStar}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
  myRating: PropTypes.number,
};

export default StarRating;
