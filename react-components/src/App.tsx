import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import CrudExample from './pages/CrudExample';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <header style={{ 
          background: '#fff', 
          padding: '16px 24px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '24px'
        }}>
          <h1 style={{ margin: 0, color: '#1890ff' }}>
            React + TypeScript + Ant Design Component Library
          </h1>
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            CRUD with 6 input fields: Name, Username, Email, Ölkə, Category, Description
          </p>
        </header>
        <main>
          <CrudExample />
        </main>
      </div>
    </ConfigProvider>
  );
};

export default App;