import React, { useState } from 'react';
import '../styles/auth.css';

interface LoginPageProps {
  onLoginSuccess: (email: string) => void;
  onNavigateToRegister?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onNavigateToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
    }, 800);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Tenant Portal Login</h2>
          
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="e.g. student@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="auth-buttons">
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onNavigateToRegister}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-actions-below">
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>
        </form>

        <div className="auth-footer">
          <p>Need help? Contact accommodation support.</p>
        </div>
      </div>
    </div>
  );
};