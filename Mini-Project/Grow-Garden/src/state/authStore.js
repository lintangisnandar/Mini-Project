import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Sinkron dengan localStorage
  login: () => {
    localStorage.setItem('isLoggedIn', 'true');
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;