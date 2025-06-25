import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import ResumeBuilder from './pages/ResumeBuilder'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Dashboard from './pages/Dashboard'

const App = () => {

  const location = useLocation();
  const isHiddenLayout = 
    location.pathname.startsWith('/resume-builder') ||
    location.pathname == '/' ||
    location.pathname == '/signup';

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-400 dark:text-white">
      {/* Navigation bar */}
      <div>
        {!isHiddenLayout && <Navbar />}
      </div>
      {/* Main content area */}
      <div className={isHiddenLayout ? 'flex-grow ' : 'flex-grow px-4 py-28'}>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume-builder/:id" element={<ResumeBuilder />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
      {/* Footer */}
      <div>
        {!isHiddenLayout && <Footer />}
      </div>
    </div>
  )
};

export default App
