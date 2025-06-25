import { useState } from 'react';
import Button from '../Button';

const InternshipForm = ({ internships, setInternships }) => {
  const [entry, setEntry] = useState({
    company: '',
    role: '',
    duration: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { company, role, duration, description } = entry;

    if (!company || !role || !duration || !description) {
      alert("Please fill out all fields.");
      return;
    }

    setInternships([
      ...internships,
      {
        company: company.trim(),
        role: role.trim(),
        duration: duration.trim(),
        description: description.trim(),
      },
    ]);

    setEntry({ company: '', role: '', duration: '', description: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Internships</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="company"
          value={entry.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="role"
          value={entry.role}
          onChange={handleChange}
          placeholder="Role/Title"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="duration"
          value={entry.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="description"
          value={entry.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <Button text="Add" type="submit" />
      </form>
    </div>
  );
};

export default InternshipForm;
