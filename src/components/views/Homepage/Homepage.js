import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBar';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const products = useSelector(state => state.products);

  return (
    <div className={styles.root}>
      <FeatureBoxes />
      <NewFurniture />
      <CompareBar />
    </div>
  );
};

// Homepage.propTypes = {};

export default Homepage;
