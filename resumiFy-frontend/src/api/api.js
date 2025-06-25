import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for all API routes
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// authenticaiton apis
export const signupUser = (userData) => API.post('/signup', userData);
export const loginUser = (credentials) => API.post('/login', credentials);

// resume apis
export const createResume = (resumeData) => API.post('/resumes', resumeData);
export const getResumesByEmail = (email) => API.get(`/resumes/${email}`);
export const getResumeById = (id) => API.get(`/resume/${id}`);
export const updateResume = (id, data) => API.put(`/resume/${id}`, data);
export const deleteResume = (id) => API.delete(`/resume/${id}`);

//contactUs api
export const submitContactMessage = (contactData) => API.post('contact-us', contactData);
