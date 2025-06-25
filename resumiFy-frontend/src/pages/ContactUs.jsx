import {  useEffect, useState } from 'react';
import Button from '../components/Button';
import { submitContactMessage } from '../api/api';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(()=> {
    if(!localStorage.getItem('token')){
      navigate('/');
    }
  }, [navigate])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      await submitContactMessage(contactData);
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting message:', err);
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-xl">
        Have questions, feedback, or need support? We'd love to hear from you!
      </p>

      <form className="w-full max-w-lg space-y-6 text-left" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            name="message"
            required
            placeholder="How can we help you?"
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
        </div>

        <Button className="mx-32 bg-amber-300 hover:bg-amber-400 w-1/2 flex flex-col justify-center items-center" text="Submit" />
      </form>
      {submitted && (
        <div className="bg-gray-500 text-green-300 text-sm mt-4 rounded-xl p-4 w-fit"> Message submitted successfully!</div>
      )}
    </div>
  );
};

export default ContactUs;
