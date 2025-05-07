import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => {
  const styleSet = {
    topOptions: 'col-8 col-md-6 text-left ' + styles.topOptions,
    topMenu: 'col-4 col-md-6 text-right ' + styles.topMenu,
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={styleSet.topOptions}>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styleSet.topMenu}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                  <span className={styles.hideText}>Login</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  <span className={styles.hideText}>Register</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
