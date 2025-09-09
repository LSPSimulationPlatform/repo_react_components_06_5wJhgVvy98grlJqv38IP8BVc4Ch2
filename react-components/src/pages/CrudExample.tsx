import React from 'react';
import { Row, Col } from 'antd';
import useCrudExample from '../hooks/useCrudExample';
import CreateUpdateCrudExample from '../components/CreateUpdateCrudExample';
import TableCrudExample from '../components/TableCrudExample';

const CrudExample: React.FC = () => {
  const {
    formData,
    categoryOptions,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    records,
    editingRecord,
    isSubmitting,
  } = useCrudExample();

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <CreateUpdateCrudExample
            formData={formData}
            categoryOptions={categoryOptions}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            handleCancelEdit={handleCancelEdit}
            isSubmitting={isSubmitting}
            editingRecord={editingRecord}
          />
        </Col>

        <Col xs={24} lg={16}>
          <TableCrudExample
            records={records}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CrudExample;