import { useState } from 'react';

export default function useCrudExample() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    country: '',
    category: '',
    description: '',
  });

  const [records, setRecords] = useState<any[]>([]);
  const [editingRecord, setEditingRecord] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryOptions = [
    { label: 'Technology', value: 'Technology' },
    { label: 'Education', value: 'Education' },
    { label: 'Health', value: 'Health' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Entertainment', value: 'Entertainment' },
  ];

  const countryOptions = [
    { label: 'Azerbaijan', value: 'Azerbaijan' },
    { label: 'USA', value: 'USA' },
    { label: 'Germany', value: 'Germany' },
    { label: 'France', value: 'France' },
    { label: 'Japan', value: 'Japan' },
  ];

  const handleInputChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.username || !formData.email || !formData.country || !formData.category) {
      alert('Please fill all required fields!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      if (editingRecord) {
        setRecords(records.map(r => (r === editingRecord ? { ...formData } : r)));
        setEditingRecord(null);
      } else {
        setRecords([...records, { ...formData }]);
      }
      setFormData({
        name: '',
        username: '',
        email: '',
        country: '',
        category: '',
        description: '',
      });
      setIsSubmitting(false);
    }, 500);
  };

  const handleEdit = (record: any) => {
    setEditingRecord(record);
    setFormData(record);
  };

  const handleDelete = (record: any) => {
    setRecords(records.filter(r => r !== record));
  };

  const handleCancelEdit = () => {
    setEditingRecord(null);
    setFormData({
      name: '',
      username: '',
      email: '',
      country: '',
      category: '',
      description: '',
    });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Ölkə', dataIndex: 'country', key: 'country' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <>
          <button onClick={() => handleEdit(record)}>Edit</button>
          <button onClick={() => handleDelete(record)}>Delete</button>
        </>
      ),
    },
  ];

  return {
    formData,
    categoryOptions,
    countryOptions,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    columns,
    records,
    editingRecord,
    setEditingRecord,
    isSubmitting,
    setIsSubmitting,
  };
}