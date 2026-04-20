import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const RevealAnimation = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const ref = useScrollReveal();
  
  const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right'
  }[direction];

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div ref={ref} className={`${directionClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
};

export default RevealAnimation;