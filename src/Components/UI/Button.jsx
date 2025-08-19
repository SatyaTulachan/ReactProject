import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'sm', onClick, className = '' }) => (
  <button 
    className={`btn btn-${variant} btn-${size} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;