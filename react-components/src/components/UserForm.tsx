/ components/UserForm.tsx
import React, { useState } from "react";

interface User {
  name: string;
  email: string;
  country: string;
}

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({ name: "", email: "", country: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: "", email: "", country: "" }); // formu təmizləyir
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input
        type="text"
        name="country"
        placeholder="Ölkə"
        value={user.country}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
        Create
      </button>
    </form>
  );
};

export default UserForm;