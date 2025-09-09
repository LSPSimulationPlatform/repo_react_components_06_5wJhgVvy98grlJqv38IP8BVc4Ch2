import { Table, Space, Button, Popconfirm } from 'antd';
import React from 'react';

interface TableCrudExampleProps {
  records: any[];
  handleEdit: (record: any) => void;
  handleDelete: (record: any) => void;
}

const TableCrudExample: React.FC<TableCrudExampleProps> = ({ records, handleEdit, handleDelete }) => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'User Name', dataIndex: 'userName', key: 'userName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Ölkə', dataIndex: 'country', key: 'country' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this record?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={records}
      columns={columns}
      rowKey={(record) => record.userName + record.email}
      pagination={false}
      size="middle"
    />
  );
};

export default TableCrudExample;