import React from 'react';
import './Button.css';

type ButtonProps = {
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      Clique
    </button>
  );
};

export default Button;