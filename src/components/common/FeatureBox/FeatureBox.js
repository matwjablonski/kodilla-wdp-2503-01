import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';
import { Link } from 'react-router-dom';

const FeatureBox = ({ active, icon, children, linkTo, onClick }) => (
  <Link to={`/${linkTo}`} className={styles.link} onClick={onClick}>
    <div className={styles.root + (active ? ' ' + styles.active : '')}>
      {icon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  </Link>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
};

export default FeatureBox;
