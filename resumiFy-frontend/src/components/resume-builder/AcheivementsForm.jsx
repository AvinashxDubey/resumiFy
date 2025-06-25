import { useState } from 'react';
import Button from '../Button';

const AchievementsForm = ({ achievements, setAchievements }) => {
  const [achievement, setAchievement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!achievement.trim()) return;
    setAchievements([...achievements, achievement.trim()]);
    setAchievement('');
  };

  const removeAchievement = (index) => {
    const newList = [...achievements];
    newList.splice(index, 1);
    setAchievements(newList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
      <textarea
        value={achievement}
        onChange={(e) => setAchievement(e.target.value)}
        placeholder="Enter an achievement"
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white mb-2"
      />

      <Button
        type="submit"
        text='Add'
      />

      <ul className="mt-4 space-y-2">
        {achievements.map((item, idx) => (
          <li
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 p-2 rounded flex justify-between items-center"
          >
            <span className="text-sm">{item}</span>

            <Button type="button"
              onClick={() => removeAchievement(idx)}
              className="text-red-600 hover:text-red-800 font-bold text-lg"
              text='✕'
            />
          </li>
        ))}
      </ul>
    </form>
  );
};

export default AchievementsForm;
