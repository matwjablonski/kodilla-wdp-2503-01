import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const MenuBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const styleSet = {
    menu: 'col-auto ' + styles.menu,
    dropDownButton: 'col-auto ' + styles.dropDownButton,
    mdSearch: 'col-auto ' + styles.mdSearch,
    main: 'row align-items-center ' + styles.main,
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const menuItems = ['Home', 'Furniture', 'Chair', 'Table', 'Sofa', 'Bedroom', 'Blog'];
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styleSet.main}>
          <div className={styleSet.mdSearch}>
            <ProductSearch />
            <div className={styleSet.dropDownButton}>
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
                    {menuItems.map((menuItem, index) => (
                      <li key={menuItem.id}>
                        <a href='#' className={index === 0 ? styles.active : ''}>
                          {menuItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={styleSet.menu}>
            <ul>
              {menuItems.map((menuItem, index) => (
                <li key={menuItem.id}>
                  <a href='#' className={index === 0 ? styles.active : ''}>
                    {menuItem}
                  </a>
                </li>
              ))}
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
