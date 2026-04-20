import React from 'react';

const Ticker = () => {
  const items = [
    'Web Development',
    'Android & iOS Apps',
    'BPO Services',
    'KPO Services',
    'Data Analytics',
    'SEO & Digital Marketing',
    'Temp Staffing',
    'UI/UX Design'
  ];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="ticker-item">
            {item} <span className="ticker-sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;