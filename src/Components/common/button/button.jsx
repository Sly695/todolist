import React from 'react';
import '../../../Assets/style/components/button.css';

const Button = ({ className, name, handleClick, style}) => {
  return (
    <button style={style} className={className} onClick={() => handleClick()}>{name}</button>
  )
}

export default Button;