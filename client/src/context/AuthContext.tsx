import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, role?: UserRole) => Promise<void>;
  register: (name: string, email: string, role?: UserRole) => Promise<void>;
  logout: () => Promise<void>;
  switchRolePreview: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check saved session or initialize default demo student user for instant preview
    try {
      const savedUser = localStorage.getItem('quizforge_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        // Default initialized student session for seamless experience
        const defaultStudent: User = {
          id: 'usr_student_1',
          name: 'Alex Rivera',
          email: 'alex.rivera@college.edu',
          role: 'student',
          status: 'active',
          createdAt: new Date().toISOString(),
        };
        setUser(defaultStudent);
        localStorage.setItem('quizforge_user', JSON.stringify(defaultStudent));
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, role: UserRole = 'student') => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const loggedUser: User = {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Student User',
      email,
      role,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    setUser(loggedUser);
    localStorage.setItem('quizforge_user', JSON.stringify(loggedUser));
    setIsLoading(false);
  };

  const register = async (name: string, email: string, role: UserRole = 'student') => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name,
      email,
      role,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('quizforge_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('quizforge_user');
  };

  const switchRolePreview = (role: UserRole) => {
    if (!user) return;
    const names = {
      student: 'Alex Rivera (Student)',
      teacher: 'Prof. David Vance (Teacher)',
      admin: 'System Admin (Staff)',
    };
    const updated: User = {
      ...user,
      role,
      name: names[role],
    };
    setUser(updated);
    localStorage.setItem('quizforge_user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        switchRolePreview,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
