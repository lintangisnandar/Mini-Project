import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Redirect ke halaman login jika belum login
    return <Navigate to="/sign-in" />;
  }

  // Render halaman yang dilindungi jika sudah login
  return children;
};

export default ProtectedRoute;