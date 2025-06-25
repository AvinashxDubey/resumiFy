import { useState } from 'react';

import Button from '../../components/Button'
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../../api/api';

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(userData);
      navigate('/');
    }
    catch (err) {
      setError(err.response?.data?.message || 'Sign-up failed');
    }
  };

  return (
    <div className="max-w-md mx-auto m-20 p-6 shadow rounded-3xl bg-gray-200 text-black">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="someone@example.com" value={userData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} className="w-full p-2 border rounded" />
        {error && <p className='text-red-700 text-sm'>{error}</p>}
        <Button
          type='submit'
          className="bg-amber-300 hover:bg-amber-400"
          text="Sign up"
        />
        <p className='mt-4 text-sm'>
          Already have an account? <Link to='/' className='text-blue-500 underline'>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
