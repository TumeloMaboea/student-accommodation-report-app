import React, { useState } from 'react';
import type { UserProfile } from '../types/databases.type';
import '../styles/auth.css';

interface RegisterPageProps {
  onRegisterSuccess: (newUser: UserProfile) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    accommodation_name: '',
    room_details: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: formData.name,
      surname: formData.surname,
      //student_number: '',
      accommodation_id: 'acc_1',
      accommodation_name: formData.accommodation_name,
      room_id: 'room_1',
      room_details: formData.room_details,
    };
    onRegisterSuccess(newUser);
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '440px' }}>
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Register your details for maintenance requests</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input type="text" name="name" className="form-control" placeholder="e.g. John" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input type="text" name="surname" className="form-control" placeholder="e.g. Doe" value={formData.surname} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Accommodation Name</label>
            <input type="text" name="accommodation_name" className="form-control" placeholder="e.g. Student Village A" value={formData.accommodation_name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Room / Unit Details</label>
            <input type="text" name="room_details" className="form-control" placeholder="e.g. Block B, Room 204" value={formData.room_details} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" placeholder="e.g. student@example.ac.za" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="auth-buttons">
            <button type="submit" className="btn-primary">Register Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};