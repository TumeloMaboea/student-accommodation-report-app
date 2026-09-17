import React, { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ReportFormPage } from './pages/ReportFormPage';
import type { UserProfile, Category, ReportFormData } from './types/databases.type';

const mockCategories: Category[] = [
  { id: 'cat_1', name: 'Plumbing' },
  { id: 'cat_2', name: 'Electrical' },
  { id: 'cat_3', name: 'Furniture / Carpentry' },
  { id: 'cat_4', name: 'Appliance Repair' },
];

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'report'>('login');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  const handleRegisterSuccess = (newUser: UserProfile) => {
    setCurrentUser(newUser);
    setCurrentScreen('report');
  };

  const handleLoginSuccess = (_email: string) => {
    // Fallback profile if logging in directly
    setCurrentUser({
      id: 'usr_default',
      name: 'John',
      surname: 'Doe',
     
      accommodation_id: 'acc_1',
      accommodation_name: 'Student Village A',
      room_id: 'room_1',
      room_details: 'Block B, Room 204',
    });
    setCurrentScreen('report');
  };

  const handleReportSubmit = async (formData: ReportFormData) => {
    console.log('Submitting payload for user:', currentUser?.id, formData);
  };

  return (
    <div>
      {currentScreen === 'login' && (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onNavigateToRegister={() => setCurrentScreen('register')}
        />
      )}

      {currentScreen === 'register' && (
        <RegisterPage
          onRegisterSuccess={handleRegisterSuccess}
          onNavigateToLogin={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'report' && currentUser && (
        <ReportFormPage
          currentUser={currentUser}
          categories={mockCategories}
          onSubmitReport={handleReportSubmit}
        />
      )}
    </div>
  );
};

export default App;