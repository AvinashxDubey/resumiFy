const express = require('express');
const cors = require('cors');
const connectDb = require('./config/connectDb');
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());  //cross origin res sharing - connecting to frontend
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