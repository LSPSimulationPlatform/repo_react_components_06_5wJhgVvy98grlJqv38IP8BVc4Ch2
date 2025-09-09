import React from 'react';
import { Select } from 'antd';

const SelectBox: React.FC<any> = ({ label, options, value, handleSelectChange, placeholder, required = false }) => {
  return (
    <div>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
      </label>
      <Select style={{ width: '100%' }} value={value || undefined} onChange={handleSelectChange} placeholder={placeholder} options={options} allowClear />
    </div>
  );
};

export default SelectBox;