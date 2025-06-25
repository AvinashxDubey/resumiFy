import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeCard from '../components/resume-builder/ResumeCard';
import { getResumesByEmail, createResume, updateResume, deleteResume } from '../api/api';
import Button from '../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || !currentUser?.email) {
      navigate('/');
      return;
    }

    const fetchResumes = async () => {
      try {
        const res = await getResumesByEmail(currentUser.email);
        setResumes(res.data);
      } catch (err) {
        console.error('Failed to load resumes', err);
      }
    };
    
    fetchResumes();
  }, [currentUser?.email, navigate]);

  const handleCreate = async () => {
    const newResume = {
      title: `Resume #${resumes.length + 1}`,
      contactInfo: {},
      summary: '',
      educationList: [],
      internships: [],
      projects: [],
      skills: [],
      achievements: [],
      email: currentUser.email,
      updatedAt: new Date().toLocaleString(),
    };

    try {
      const res = await createResume(newResume);
      navigate(`/resume-builder/${res.data.id}`);
    } catch (err) {
      console.log('Failed to create resume: ', err);
    }
  };

  const onRename = async (id, newTitle) => {
    const resume = resumes.find((r) => r._id === id);
    if (!resume) return;

    try {
      const updated = {
        ...resume,
        title: newTitle,
        updatedAt: new Date().toLocaleString(),
      };
      await updateResume(id, updated);
      setResumes((prev) =>
        prev.map((r) => (r._id === id ? updated : r))
      );
    } catch (err) {
      console.error('Failed to rename resume:', err);
    }
  };

  const onDelete = async (id) => {
    try {
      await deleteResume(id);
      setResumes((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error('Error deleting resume: ', err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Your Resumes</h1>

      {resumes.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">
          No resumes yet. Click "Create Resume" to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume._id}
              resume={resume}
              onEdit={() => navigate(`/resume-builder/${resume._id}`)}
              onDelete={onDelete}
              onRename={onRename}
            />
          ))}
        </div>
      )}

      {/* Floating Create Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          text="+ Create Resume"
          onClick={handleCreate}
        />
      </div>
    </div>
  );
};

export default Dashboard;