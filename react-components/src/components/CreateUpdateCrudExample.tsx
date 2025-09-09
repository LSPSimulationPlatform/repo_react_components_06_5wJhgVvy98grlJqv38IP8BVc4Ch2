import React from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import SelectBox from './SelectBox';
import TextArea from './TextArea';

export default function CreateUpdateCrudExample({
  formData,
  categoryOptions,
  countryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleCancelEdit,
  isSubmitting,
  editingRecord,
}: any) {
  return (
    <Card
      title={editingRecord ? 'Edit Record' : 'Create New Record'}
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          {editingRecord && (
            <Button text="Cancel" onClick={handleCancelEdit} variant="secondary" />
          )}
          <Button text={editingRecord ? 'Update' : 'Create'} onClick={handleSubmit} variant="primary" loading={isSubmitting} />
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input label="Name" placeholder="Enter name" value={formData.name} handleInputChange={handleInputChange('name')} required />
        <Input label="Username" placeholder="Enter username" value={formData.username} handleInputChange={handleInputChange('username')} required />
        <Input label="Email" placeholder="Enter email" value={formData.email} handleInputChange={handleInputChange('email')} required />
        <SelectBox label="Ölkə" options={countryOptions} value={formData.country} handleSelectChange={handleSelectChange('country')} placeholder="Select a country" required />
        <SelectBox label="Category" options={categoryOptions} value={formData.category} handleSelectChange={handleSelectChange('category')} placeholder="Select a category" required />
        <TextArea label="Description" placeholder="Enter description" value={formData.description} handleInputChange={handleInputChange('description')} rows={4} maxLength={500} showCount />
      </div>
    </Card>
  );
}