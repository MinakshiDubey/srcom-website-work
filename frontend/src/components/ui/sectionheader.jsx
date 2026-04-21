import React from 'react';
import { useScrollReveal } from '../../hooks/usescrollreveal.jsx';

const SectionHeader = ({ label, title, description, centered = false }) => {
  const labelRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const descRef = useScrollReveal();

  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      <div ref={labelRef} className="section-label reveal" style={centered ? {justifyContent: 'center'} : {}}>
        {label}
      </div>
      <h2 ref={titleRef} className="reveal delay-1" dangerouslySetInnerHTML={{ __html: title }} />
      {description && (
        <p ref={descRef} className="reveal delay-2" style={centered ? {margin: '0 auto'} : {}}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;