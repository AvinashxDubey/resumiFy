import { useState } from 'react';
import Button from '../Button';

const ProjectsForm = ({ projects, setProjects }) => {
  const [project, setProject] = useState({
    title: '',
    techStack: '',
    description: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!project.title.trim() || !project.description.trim()) {
      alert("Please fill out the required fields.");
      return;
    }

    setProjects([...projects, {
      ...project,
      title: project.title.trim(),
      description: project.description.trim(),
      techStack: project.techStack.trim(),
      link: project.link.trim()
    }]);

    setProject({ title: '', techStack: '', description: '', link: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="techStack"
          value={project.techStack}
          onChange={handleChange}
          placeholder="Tech Stack (comma separated)"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="link"
          value={project.link}
          onChange={handleChange}
          placeholder="Live Link (optional)"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <Button type="submit" text="Add" />
      </form>
    </div>
  );
};

export default ProjectsForm;
