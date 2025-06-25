import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  // Apply theme class and persist it
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-white font-bold"
      >
        {currentUser?.name?.charAt(0)?.toUpperCase() || "U"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 p-4">
          <div className="mb-2">
            <p className="font-semibold text-gray-800 dark:text-white">{currentUser?.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{currentUser?.email}</p>
          </div>

          <hr className="my-2 border-gray-300 dark:border-gray-600" />

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-200">Dark Mode</span>

            <label className="relative w-11 h-6">
              <input
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
                className="sr-only"
              />
              <div className="block w-full h-full bg-gray-300 rounded-full dark:bg-gray-600 transition-colors duration-300"></div>
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isDark ? 'translate-x-5' : ''}`}></div>
            </label>
          </div>


          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-2 w-full text-left text-red-600 hover:text-red-700 font-medium"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
