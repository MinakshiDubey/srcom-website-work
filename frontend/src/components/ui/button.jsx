import React from 'react';

const Button = ({ children, variant = 'primary', href, onClick, className = '', style }) => {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;