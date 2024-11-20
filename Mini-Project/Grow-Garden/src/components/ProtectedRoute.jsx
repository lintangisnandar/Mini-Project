import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../state/authStore';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    // Redirect ke halaman login jika belum login
    return <Navigate to="/sign-in" />;
  }

  // Render halaman yang dilindungi jika sudah login
  return children;
};

export default ProtectedRoute;