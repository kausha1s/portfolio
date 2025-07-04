import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Portfolio
        </Link>
        <div className="navbar-links">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/experience" className="navbar-link">
            Experience
          </Link>
          <Link to="/education" className="navbar-link">
            Education
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 