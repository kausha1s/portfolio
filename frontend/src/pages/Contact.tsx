import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

interface Contact {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  resumeUrl: string;
}

const Contact = () => {
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get('/api/contact');
        setContact(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContact();
  }, []);

  if (!contact) return null;

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href={`mailto:${contact.email}`} className="email">
              {contact.email}
            </a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>{contact.location}</span>
          </div>
          <div className="social-links">
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 