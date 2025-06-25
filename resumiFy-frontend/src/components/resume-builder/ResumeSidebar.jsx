const ResumeSidebar = ({ currentSection, setCurrentSection }) => {
  const sections = [
    { id: 'contact', label: 'Contact Info' },
    { id: 'summary', label: 'Professional Summary' },
    { id: 'education', label: 'Education' },
    { id: 'internships', label: 'Internships' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <aside className="sticky top-20 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg h-fit w-60">
      <nav className="space-y-3 text-sm font-medium">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setCurrentSection(id)}
            className={`block w-full text-left px-2 py-1 rounded hover:text-yellow-500 ${
              currentSection === id
                ? 'bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default ResumeSidebar;
