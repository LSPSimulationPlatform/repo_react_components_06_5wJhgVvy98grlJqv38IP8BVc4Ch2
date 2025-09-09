import React from 'react';
import { Table, Popconfirm } from 'antd';
import Button from './Button';

interface TableCrudExampleProps {
  records: any[];
  handleEdit: (record: any) => void;
  handleDelete: (record: any) => void;
  columns: any[];
}

const TableCrudExample: React.FC<TableCrudExampleProps> = ({ records, handleEdit, handleDelete, columns }) => {
  return (
    <Table
      dataSource={records}
      columns={columns.map(col => {
        if (col.key === 'actions') {
          return {
            ...col,
            render: (_: any, record: any) => (
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button onClick={() => handleEdit(record)} text="Edit" variant="primary" />
                <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record)}>
                  <Button text="Delete" variant="secondary" />
                </Popconfirm>
              </div>
            ),
          };
        }
        return col;
      })}
      rowKey={(record) => record.email}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default TableCrudExample;