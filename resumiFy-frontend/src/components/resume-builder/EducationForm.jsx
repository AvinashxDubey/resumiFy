import { useState } from 'react';
import Button from '../Button';

const EducationForm = ({ educationList, setEducationList }) => {
  const [entry, setEntry] = useState({
    institute: '',
    degree: '',
    location: '',
    duration: '',
    score: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!entry.institute || !entry.degree) {
      alert("Enter the required fields.");
      return;
    }
    setEducationList([...educationList, entry]);
    setEntry({ institute: '', degree: '', location: '', duration: '', score: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="institute"
          value={entry.institute}
          onChange={handleChange}
          placeholder="Institute"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="degree"
          value={entry.degree}
          onChange={handleChange}
          placeholder="Degree"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="location"
          value={entry.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="duration"
          value={entry.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          name="score"
          value={entry.score}
          onChange={handleChange}
          placeholder="Score (CGPA / %)"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <Button text="Add" type="submit" />
      </form>
    </div>
  );
};

export default EducationForm;
