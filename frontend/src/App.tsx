import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-container">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="navbar-brand"
            >
              <Link to="/">KKS</Link>
            </motion.div>
            <div className="navbar-links">
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="/projects" className="navbar-link">Projects</Link>
              <Link to="/experience" className="navbar-link">Experience</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
