import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CompareBar.module.scss';
import { toggleCompare } from '../../../redux/compereRedux';
import Button from '../../common/Button/Button';

const CompareBar = ({ products }) => {
  const compared = useSelector(state => state.compared);
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
              <img src={product.image} alt={product.name} />
              <span className={styles.remove}>x</span>
            </div>
          ))}
          <Button variant='small'>Compare</Button>
        </div>
      </div>
    )
  );
};

export default CompareBar;
