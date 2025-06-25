import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  
  const navigate = useNavigate();

  useEffect(()=> {
    if(!localStorage.getItem('token')){
      navigate('/');
    }
  }, [navigate])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800">Resume Builder</h1>
      <p className="p-4 text-lg">
        Welcome to the Resume Builder! This tool is designed to help you create a professional resume quickly and easily.
        You can customize your resume with various templates, add your personal information, work experience, education,
        skills, and more. Once you're satisfied with your resume, you can download it in PDF format.
      </p>

    </div>
  )
}

export default About;
