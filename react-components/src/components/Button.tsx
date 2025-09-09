import React from 'react';
import { Button as AntButton } from 'antd';

const Button: React.FC<any> = ({ text, onClick, variant = 'secondary', loading = false }) => {
  const type = variant === 'primary' ? 'primary' : 'default';
  return (
    <AntButton type={type} onClick={onClick} loading={loading}>
      {text}
    </AntButton>
  );
};

export default Button;