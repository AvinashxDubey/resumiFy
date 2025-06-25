const ContactForm = ({ contactInfo, setContactInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    // Optionally: validate or show feedback here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-4">
        {["name", "email", "phone", "linkedin", "github"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium capitalize mb-1">
              {field}
            </label>
            <input
              type="text"
              name={field}
              value={contactInfo[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default ContactForm;
