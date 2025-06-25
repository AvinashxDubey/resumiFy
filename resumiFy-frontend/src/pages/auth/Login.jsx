import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Button from '../../components/Button'
import { loginUser } from '../../api/api';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      const res = await loginUser(userData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data.user));
      navigate('/dashboard');
    }
    catch(err){
      setError(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <div className="max-w-md mx-auto m-20 p-6 shadow rounded-3xl bg-gray-200 text-black">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="someone@example.com" value={userData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} className="w-full p-2 border rounded" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          type='submit'
          className="bg-amber-300 hover:bg-amber-400"
          text="Login"
        />
      </form>
      <p className='mt-4 text-sm'>Dont have an account? <Link to= '/signup' className='text-blue-500 underline'>Sign up</Link></p>
      
    </div>
  );
};

export default Login;
