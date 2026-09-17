import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, error, ...props }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input className="form-control" {...props} />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};