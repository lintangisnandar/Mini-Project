import { useContext } from 'react';
import AuthContext from '../Auth/AuthContext';

export const useAuth = () => useContext(AuthContext);