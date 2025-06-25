import resumeHomeImg from "../assets/home-resume.png"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '../components/Button';

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
      return;
    }
  }, [navigate])

  const handleClick = () => {
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-12 space-x-4">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Build Your Resume <br className="hidden sm:inline" />
          <span className="text-amber-500">Smarter & Faster</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Craft professional resumes made easy for my dear lazy dwellers. Fill your details, and download — it's that simple!
        </p>
        <div className="items-center">
          <Button
            className="bg-amber-500 text-white hover:bg-amber-400"
            text="go to dashboard"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-xl mt-12 lg:mt-0">
        <img
          src={resumeHomeImg}
          alt="Resume Illustration"
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

    </div>
  );
};

export default Home;
