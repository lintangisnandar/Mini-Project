import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../state/authStore';
import Avatar from '../UI/Avatar';
import DropdownMenu from '../UI/DropdownMenu';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuthStore(); // Ambil state langsung dari Zustand
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/sign-in'); // Redirect ke halaman login
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar sticky top-0 bg-[#809B70] p-4 z-50 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold text-white">
        <Link to="/">GrowGarden</Link>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="dropdown dropdown-end relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Avatar src="Pfp.jpg" />
            </div>
            <DropdownMenu onLogout={handleLogout} />
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-4 py-2 text-sm md:text-base text-white border border-white font-semibold rounded-lg">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;