import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const boxes = [
    { icon: faTruck, title: 'Free shipping', desc: 'All orders', linkTo: '' },
    { icon: faHeadphones, title: '24/7 customer', desc: 'support', linkTo: 'support' },
    { icon: faReplyAll, title: 'Money back', desc: 'guarantee', linkTo: 'guarantee' },
    {
      icon: faBullhorn,
      title: 'Member discount',
      desc: 'First order',
      linkTo: 'firstOrder',
    },
  ];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          {boxes.map((box, index) => (
            <div className='col' key={index}>
              <FeatureBox
                icon={box.icon}
                linkTo={box.linkTo}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <h5>{box.title}</h5>
                <p>{box.desc}</p>
              </FeatureBox>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
