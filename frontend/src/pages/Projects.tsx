import { motion } from 'framer-motion';
import { FaGithub, FaAndroid, FaDatabase, FaBrain, FaBolt, FaFilm, FaBus, FaQuestionCircle, FaLink } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "High-Throughput Messaging Platform",
      episodeTitle: "The One With The Million Messages",
      description: "Designed and implemented a scalable messaging platform handling 1M+ daily notifications with 99.9% uptime. Features include webhook system, URL shortening, and WhatsApp integration.",
      tech: ["Go", "Kafka", "Redis", "AWS Lambda", "GCP"],
      icon: <FaBrain />,
      role: "Backend Developer"
    },
    {
      title: "Secure Webhook System",
      episodeTitle: "The One With All The Security",
      description: "Built a secure webhook delivery system enabling real-time data delivery for 20+ clients. Implemented symmetric encryption for data security and achieved 99.9% delivery success rate.",
      tech: ["Go", "Redis", "PostgreSQL", "AWS", "Encryption"],
      icon: <FaLink />,
      role: "Backend Developer"
    },
    {
      title: "Telemedicine API System",
      episodeTitle: "The One Where Everyone Gets Better",
      description: "Developed a robust API system supporting 100+ daily medical consultations. Built with microservices architecture using Golang, featuring high availability and real-time communication.",
      tech: ["Golang", "Microservices", "Redis", "PostgreSQL"],
      icon: <FaDatabase />,
      role: "Backend Developer",
      github: "https://github.com/shkaushal/telemedicine-api"
    },
    {
      title: "StaySafe Wildlife Detection",
      episodeTitle: "The One With The Wild Animals",
      description: "Created an Android app for real-time wild animal detection via video feeds, enhancing on-campus safety. Integrated computer vision for animal detection and Firebase for data management.",
      tech: ["Android", "Machine Learning", "Firebase", "Java", "Computer Vision", "IoT"],
      icon: <FaAndroid />,
      role: "Developer",
      github: "https://github.com/shkaushal/staysafe"
    },
    {
      title: "Electricity Load Forecasting",
      episodeTitle: "The One With All The Power",
      description: "Built an ML-based web app to forecast electricity demand across Madhya Pradesh, aiding efficient energy distribution. Implemented using Django and PostgreSQL with machine learning models.",
      tech: ["Django", "PostgreSQL", "Machine Learning", "Python"],
      icon: <FaBolt />,
      role: "Intern",
      github: "https://github.com/shkaushal/load-forecasting"
    },
    {
      title: "Movie Recommendation",
      episodeTitle: "The One With All The Movies",
      description: "Developed a Machine Learning model using LDA topic modelling to recommend movies based on plot similarity. Processed 35,000+ movie plots for accurate recommendations.",
      tech: ["Python", "Machine Learning", "NLP", "LDA"],
      icon: <FaFilm />,
      role: "ML Engineer",
      github: "https://github.com/shkaushal/movie-recommendation"
    },
    {
      title: "Test Your Knowledge",
      episodeTitle: "The One With All The Questions",
      description: "Django-based quizzing application with user authentication, quiz selection, and score tracking. Frontend built with Bootstrap for a responsive design.",
      tech: ["Django", "Python", "Bootstrap", "PostgreSQL"],
      icon: <FaQuestionCircle />,
      role: "Full Stack Developer",
      github: "https://github.com/shkaushal/test-your-knowledge"
    },
    {
      title: "BusKaro",
      episodeTitle: "The One With The Bus",
      description: "Web-based Bus Booking Portal for IIIT Jabalpur with user authentication, booking management, and seat selection. Built with PHP and Bootstrap.",
      tech: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
      icon: <FaBus />,
      role: "Full Stack Developer",
      github: "https://github.com/shkaushal/buskaro"
    }
  ];

  return (
    <div className="container">
      <h1>The One With All The Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
          >
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div>
                  <h3>{project.title}</h3>
                  <span className="project-episode">{project.episodeTitle}</span>
                  <span className="project-role">{project.role}</span>
                </div>
              </div>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tag">{tech}</span>
                  ))}
                </div>
                {project.github && project.github.trim() !== "" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 