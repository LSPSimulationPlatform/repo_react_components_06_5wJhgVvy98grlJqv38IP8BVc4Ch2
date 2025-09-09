import React from 'react';
import { Input as AntInput } from 'antd';
const { TextArea: AntTextArea } = AntInput;

const TextArea: React.FC<any> = ({ label, placeholder, value, handleInputChange, rows = 4, maxLength, showCount = false }) => {
  return (
    <div>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>{label}</label>
      <AntTextArea
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        rows={rows}
        maxLength={maxLength}
        showCount={showCount}
      />
    </div>
  );
};

export default TextArea;