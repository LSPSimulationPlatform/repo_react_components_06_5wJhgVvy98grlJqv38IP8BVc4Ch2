import { useState } from 'react';

export default function useCrudExample() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    userName: '',
    email: '',
    country: '',
  });

  const [records, setRecords] = useState<any[]>([]);
  const [editingRecord, setEditingRecord] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryOptions = [
    { label: 'Category A', value: 'A' },
    { label: 'Category B', value: 'B' },
    { label: 'Category C', value: 'C' },
  ];

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (!formData.name || !formData.userName || !formData.email || !formData.country || !formData.category) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (editingRecord) {
      // Update
      setRecords(records.map(r => r === editingRecord ? { ...editingRecord, ...formData } : r));
      setEditingRecord(null);
    } else {
      // Create
      setRecords([...records, { ...formData }]);
    }

    setFormData({
      name: '',
      category: '',
      description: '',
      userName: '',
      email: '',
      country: '',
    });

    setIsSubmitting(false);
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
      category: '',
      description: '',
      userName: '',
      email: '',
      country: '',
    });
  };

  return {
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
  };
}