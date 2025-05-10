import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompare } from '../../../redux/compereRedux';
import StarRating from '../../features/StarRating/StarRating';

const ProductBox = ({
  id,
  category,
  name,
  price,
  promo,
  stars,
  isFavorite,
  isCompare,
  oldPrice,
  myRating,
}) => {
  const dispatch = useDispatch();
  const compared = useSelector(state => state.compared);

  const isCompared = compared.includes(id);

  const handleCompare = e => {
    e.preventDefault();
    if (isCompared || compared.length < 4) {
      dispatch(toggleCompare(id));
    }
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${category}/${id}.jpg)`,
        }}
      >
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarRating stars={stars} myRating={myRating} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={isFavorite ? styles.active : undefined}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={handleCompare}
            className={isCompared ? styles.active : undefined}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && <span className={styles.oldPrice}>$ {oldPrice}</span>}
          <Button noHover variant='small' className={styles.priceChange}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  oldPrice: PropTypes.number,
  myRating: PropTypes.number,
};

export default ProductBox;
