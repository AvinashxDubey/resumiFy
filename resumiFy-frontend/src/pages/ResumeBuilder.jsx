import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '../components/resume-builder/ResumeSidebar';
import ResumeForm from '../components/resume-builder/ResumeForm';
import ResumePreview from '../components/resume-builder/ResumePreview';
import Button from '../components/Button';
import { getResumeById, updateResume } from '../api/api';

const ResumeBuilder = () => {
  const { id } = useParams();
  const [currentSection, setCurrentSection] = useState('contact');

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
  }, [navigate])

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });
  const [summary, setSummary] = useState('');
  const [educationList, setEducationList] = useState([]);
  const [internships, setInternships] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const resumeData = {
    contactInfo,
    summary,
    educationList,
    internships,
    projects,
    skills,
    achievements,
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await getResumeById(id);
        const resume = res.data;

        setContactInfo({
          name: resume.contactInfo?.name || '',
          email: resume.contactInfo?.email || '',
          phone: resume.contactInfo?.phone || '',
          linkedin: resume.contactInfo?.linkedin || '',
          github: resume.contactInfo?.github || '',
        });
        setSummary(resume.summary || '');
        setEducationList(resume.educationList || []);
        setInternships(resume.internships || []);
        setProjects(resume.projects || []);
        setSkills(resume.skills || []);
        setAchievements(resume.achievements || []);
      } catch (err) {
        console.error('Failed to load resume:', err);
        alert('Could not load resume');
      }
    };

    fetchResume();
  }, [id]);



  const handleSave = async () => {
    try {
      const updatedResume = {
        contactInfo,
        summary,
        educationList,
        internships,
        projects,
        skills,
        achievements,
        updatedAt: new Date().toLocaleString(),
      };

      await updateResume(id, updatedResume);
      alert('Resume saved successfully!');
    } catch (err) {
      console.error('Error saving resume: ', err);
      alert('Failed to save resume. Please try again.')
    }
  };

  const handleDownload = () => {
    window.print(); // Browser print dialog
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      <div id="no-print" className="flex gap-6">
        <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />

        {/* Form */}
        <div className="w-1/2">
          <ResumeForm
            currentSection={currentSection}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            summary={summary}
            setSummary={setSummary}
            educationList={educationList}
            setEducationList={setEducationList}
            internships={internships}
            setInternships={setInternships}
            projects={projects}
            setProjects={setProjects}
            skills={skills}
            setSkills={setSkills}
            achievements={achievements}
            setAchievements={setAchievements}
          />
        </div>

        {/* Preview */}
        <div className="w-[800px] bg-white text-black p-6 shadow rounded font-sans">
          <ResumePreview {...resumeData} />
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={handleSave} text="Save Resume" />
            <Button onClick={handleDownload} text="Download Resume" />
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <Button
              text={'back to Dashboard'}
              onClick={handleDashboard}
            />
          </div>
        </div>
      </div>

      {/* Print Area (hidden) */}
      <div id="print-area" className="hidden">
        <ResumePreview {...resumeData} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
