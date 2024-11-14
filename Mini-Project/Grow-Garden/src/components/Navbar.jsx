import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar bg-[#809B70] p-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-white text-2xl font-bold">GrowGarden</Link>
      </div>
      <div className="flex-none">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Profile" src="Pfp.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-[#809B70] rounded-box z-[1] mt-3 w-52 p-2 shadow-md">
              <li><Link to="/my-plants">My Plants</Link></li>
              <li><Link to="/add-plants">Add Plants</Link></li>
              <li><button onClick={handleLogout} className="text-left">Logout</button></li>
            </ul>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-6 py-2 text-white border border-white font-semibold rounded-lg">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;