import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ onLogout }) => (
  <ul
    tabIndex={0} // Tambahkan tabIndex untuk mendukung aksesibilitas dan kontrol klik.
    className="menu menu-sm dropdown-content bg-white text-[#809B70] rounded-box z-[1] mt-3 w-52 p-2 shadow-md">
    <li><Link to="/my-plants">My Plants</Link></li>
    <li><Link to="/add-plants">Add Plants</Link></li>
    <li><button onClick={onLogout}>Logout</button></li>
  </ul>
);

export default DropdownMenu;