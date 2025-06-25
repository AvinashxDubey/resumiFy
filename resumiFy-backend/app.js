const express = require('express');
const cors = require('cors');
const connectDb = require('./config/connectDb');
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//cross origin res sharing - connecting to frontend
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow
    } else {
      callback(new Error('Not allowed by CORS')); // Block
    }
  },
  credentials: true
}));

app.use(express.json()); // parse incoming json bodies

connectDb();

app.use('/api', authRoutes);
app.use('/api', resumeRoutes);
app.use('/api', contactRoutes);

//default route for checking if backend works
app.get('/', (req, res) => {
  res.send('Backend is running');
}); 

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});