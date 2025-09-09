import React from 'react';
import { Input as AntInput } from 'antd';

const Input: React.FC<any> = ({ label, placeholder, value, handleInputChange, required = false }) => {
  return (
    <div>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
      </label>
      <AntInput placeholder={placeholder} value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Input;