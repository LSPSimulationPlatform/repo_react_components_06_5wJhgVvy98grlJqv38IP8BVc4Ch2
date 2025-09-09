import Card from './Card';
import Button from './Button';
import Input from './Input';
import SelectBox from './SelectBox';
import TextArea from './TextArea';

export default function CreateUpdateCrudExample({
  formData,
  categoryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleCancelEdit,
  isSubmitting,
  editingRecord
}: any) {
  return (
    <Card
      title={editingRecord ? 'Edit Record' : 'Create New Record'}
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          {editingRecord && (
            <Button
              text="Cancel"
              onClick={handleCancelEdit}
              variant="secondary"
            />
          )}
          <Button
            text={editingRecord ? 'Update' : 'Create'}
            onClick={handleSubmit}
            variant="primary"
            loading={isSubmitting}
          />
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={formData.userName}
          handleInputChange={handleInputChange('userName')}
          required
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          handleInputChange={handleInputChange('email')}
          type="email"
          required
        />
        <Input
          label="Ölkə"
          placeholder="Enter your country"
          value={formData.country}
          handleInputChange={handleInputChange('country')}
          required
        />
        <Input
          label="Name (original)"
          placeholder="Enter name"
          value={formData.name}
          handleInputChange={handleInputChange('name')}
          required
        />
        <SelectBox
          label="Category"
          options={categoryOptions}
          value={formData.category}
          handleSelectChange={handleSelectChange}
          placeholder="Select a category"
          required
        />
        <TextArea
          label="Description"
          placeholder="Enter description"
          value={formData.description}
          handleInputChange={handleInputChange('description')}
          rows={4}
          maxLength={500}
          showCount
        />
      </div>
    </Card>
  );
}