import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CompareBar.module.scss';
import { toggleCompare } from '../../../redux/compereRedux';
import Button from '../../common/Button/Button';

const CompareBar = () => {
  const compared = useSelector(state => state.compared);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const comparedProducts = products.filter(product => compared.includes(product.id));

  return (
    compared.length > 0 && (
      <div className={styles.root}>
        <div className={styles.products}>
          {comparedProducts.map(product => (
            <div
              key={product.id}
              className={styles.product}
              onClick={() => dispatch(toggleCompare(product.id))}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/products/${product.category}/${product.id}.jpg`}
                alt={product.name}
                className={styles.image}
              />
              <span className={styles.remove}>×</span>
            </div>
          ))}
        </div>
        <Button variant='small'>Compare</Button>
      </div>
    )
  );
};

export default CompareBar;
