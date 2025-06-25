import { useState } from 'react';
import Button from '../Button'; // adjust the path as needed

const SkillsForm = ({ skills, setSkills }) => {
  const [skill, setSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim() === '') return;
    setSkills([...skills, skill.trim()]);
    setSkill('');
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter a skill"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <Button text="Add" type="submit" />
      </form>

      <div className="flex flex-wrap gap-2">
        {skills.map((s, idx) => (
          <span
            key={idx}
            className="bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded-full flex items-center"
          >
            {s}
            <button
              onClick={() => removeSkill(idx)}
              className="ml-2 text-red-500 hover:text-red-700 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
