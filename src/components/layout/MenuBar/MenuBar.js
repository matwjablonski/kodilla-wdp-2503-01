import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const MenuBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={'col ' + styles.mdSearch}>
            <ProductSearch />
            <div className={'col-auto' + styles.dropDownButton}>
              <Button
                className={styles.menuToggle}
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                noHover
              >
                <FontAwesomeIcon icon={faMobile} size='3x' />
              </Button>
              {mobileMenuOpen && (
                <div className={styles.mobileDropdown}>
                  <ul>
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <a href='#'>Furniture</a>
                    </li>
                    <li>
                      <a href='#'>Chair</a>
                    </li>
                    <li>
                      <a href='#'>Table</a>
                    </li>
                    <li>
                      <a href='#'>Sofa</a>
                    </li>
                    <li>
                      <a href='#'>Bedroom</a>
                    </li>
                    <li>
                      <a href='#'>Blog</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={'col-auto ' + styles.menu}>
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
