/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button } from "../ui/button";

const AddUserForm: React.FC<{ onSubmit: (user: any) => void }> = ({
  onSubmit,
}) => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    avatar: "",
    available: true,
    domain: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="first_name"
          value={userData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="last_name"
          value={userData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="domain"
          value={userData.domain}
          onChange={handleChange}
          placeholder="Domain"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="avatar"
          value={userData.avatar}
          onChange={handleChange}
          placeholder="Upload Avatar"
          className="p-2 border border-gray-300 rounded"
        />
        <select
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Agender">Agender</option>
          <option value="Genderfluid">Genderfluid</option>
        </select>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="available"
            checked={userData.available}
            onChange={() =>
              setUserData({ ...userData, available: !userData.available })
            }
            className="mr-2"
          />
          <label htmlFor="available">Available</label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
