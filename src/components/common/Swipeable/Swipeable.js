import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = e => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = e => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;

      if (delta > 50 && leftAction) {
        leftAction();
      } else if (delta < -50 && rightAction) {
        rightAction();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
