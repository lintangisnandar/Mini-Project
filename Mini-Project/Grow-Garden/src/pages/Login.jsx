import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../state/authStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({ email: '', password: '', invalid: '' });
  const navigate = useNavigate();
  const { login } = useAuthStore(); // Ambil fungsi login dari Zustand

  const handleLogin = (event) => {
    event.preventDefault();

    // Reset error message
    setErrorMessage({ email: '', password: '', invalid: '' });

    // Validate input
    if (!email) {
      setErrorMessage((prev) => ({ ...prev, email: 'Please enter your email' }));
    }
    if (!password) {
      setErrorMessage((prev) => ({ ...prev, password: 'Please enter your password' }));
    }

    // Static login validation
    if (email === 'lintang@gmail.com' && password === 'growgarden123') {
      login(); // Panggil fungsi login Zustand
      navigate('/my-plants');
    } else if (email && password) {
      setErrorMessage((prev) => ({ ...prev, invalid: 'Invalid email or password' }));
    }
  };

  return (
    <div className="bg-[#E3DBC7] min-h-screen flex">
      {/* Bagian kiri: Gambar */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "url('Login.png')" }}>
      </div>

      {/* Bagian kanan: Form login */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="bg-[#FDFBF8] p-6 sm:p-10 rounded-lg shadow-md w-full max-w-sm sm:max-w-md">
          <h2 className="text-2xl font-bold text-[#84A575] mb-6 text-center">Login to GrowGarden</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[#809B70] mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  errorMessage.email || errorMessage.invalid ? 'border-red-500' : 'border-[#E3DBC7]'
                } bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A575]`}
              />
              {errorMessage.email && <p className="text-red-500 text-sm mt-1">{errorMessage.email}</p>}
            </div>
            <div>
              <label className="block text-[#809B70] mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  errorMessage.password || errorMessage.invalid ? 'border-red-500' : 'border-[#E3DBC7]'
                } bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A575]`}
              />
              {errorMessage.password && <p className="text-red-500 text-sm mt-1">{errorMessage.password}</p>}
            </div>
            {errorMessage.invalid && <p className="text-red-500 text-sm mt-2">{errorMessage.invalid}</p>}
            <button
              type="submit"
              className="w-full bg-[#84A575] text-white font-semibold py-2 rounded-lg hover:bg-[#6D8360]">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;