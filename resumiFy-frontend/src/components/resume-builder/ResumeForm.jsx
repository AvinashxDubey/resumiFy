import ContactForm from './ContactForm';
import EducationForm from './EducationForm';
import InternshipsForm from './InternshipsForm';
import SummaryForm from './SummaryForm';
import ProjectsForm from './ProjectsForm';
import SkillsForm from './SkillsForm';
import AchievementsForm from './AcheivementsForm';


// this component will render different forms based on the current section
const ResumeForm = ({
  currentSection,
  contactInfo,
  setContactInfo,
  summary,
  setSummary,
  educationList,
  setEducationList,
  internships,
  setInternships,
  projects,
  setProjects,
  skills,
  setSkills,
  achievements,
  setAchievements
}) => {
  switch (currentSection) {
    case 'contact':
      return <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} />;
    case 'summary':
      return <SummaryForm summary={summary} setSummary={setSummary} />;
    case 'education':
      return <EducationForm educationList={educationList} setEducationList={setEducationList} />;
    case 'internships':
      return <InternshipsForm internships={internships} setInternships={setInternships} />
    case 'projects':
      return <ProjectsForm projects={projects} setProjects={setProjects} />;
    case 'skills':
      return <SkillsForm skills={skills} setSkills={setSkills} />;
    case 'achievements':
      return <AchievementsForm achievements={achievements} setAchievements={setAchievements} />;
    // Add other cases later (education, projects, etc.)
    default:
      return <div>Select a section from the sidebar</div>;
  }
};

export default ResumeForm;
