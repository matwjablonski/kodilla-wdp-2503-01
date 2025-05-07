import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';

const ProductSearch = () => {
  const allCategories = useSelector(getAll);
  console.log(allCategories);
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.iconLeft} icon={faListUl} />

        <div className={styles.dropdown}>
          <button type='button' className={styles.dropdownToggle}>
            Select a category
            <FontAwesomeIcon className={styles.iconRight} icon={faCaretDown} />
          </button>
          <ul className={styles.dropdownMenu}>
            {allCategories.map(category => (
              <li key={category.id}>
                <button type='button'>{category.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button type='submit'>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
