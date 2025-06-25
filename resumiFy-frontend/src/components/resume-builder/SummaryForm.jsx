const SummaryForm = ({ summary, setSummary }) => {
  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
      <textarea
        rows={5}
        value={summary}
        onChange={handleChange}
        placeholder="Write a brief summary about yourself..."
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default SummaryForm;
