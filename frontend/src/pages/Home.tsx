import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptop, FaCoffee, FaHeart, FaServer, FaCloud, FaDatabase } from 'react-icons/fa';

const Home = () => {
  const skills = {
    languages: ["Python", "Go", "Java", "C++", "SQL", "Shell Scripting"],
    frameworks: ["Gin", "Flask", "FastAPI", "Apache Beam"],
    databases: ["MySQL", "PostgreSQL", "DynamoDB", "BigQuery", "Redshift", "Firebase", "Redis"],
    tools: ["Docker", "Kubernetes", "Apache Kafka", "Cloud Front", "CI/CD", "Github Actions"],
    cloud: ["AWS", "GCP"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="container">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hero"
      >
        <motion.div
          className="intro-section"
          variants={itemVariants}
        >
          <h1>Kaushal Kishor Sharma</h1>
          <h2 className="episode-title">Season 2025, Episode 1</h2>
          <p className="subtitle">Software Engineer (The One Who Codes)</p>
          <p className="contact-info">kaushalworkss@gmail.com | +91-8003293018</p>
        </motion.div>
        
        <motion.div 
          className="about"
          variants={itemVariants}
        >
          <p>
            <FaCoffee className="inline-icon" /> Welcome to my Central Perk of Code! 
            I'm a Software Engineer who's as passionate about distributed systems as Ross is about dinosaurs. 
            Currently brewing high-throughput solutions at Eka Care, where I handle millions of daily transactions 
            (that's a lot of coffee cups worth of data!). Previously, I was at IBM, working on their WebSphere MQ platform 
            (think of it as the coffee delivery system of the tech world).
          </p>
        </motion.div>

        <motion.div 
          className="social-links"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com/kaushalateka" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/kaushal-kishor-sharma" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:kaushalworkss@gmail.com"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.div 
          className="skills-section"
          variants={containerVariants}
        >
          <h2 className="section-title">The One With All The Skills</h2>
          <div className="skills-grid">
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="skill-card"
            >
              <FaCode className="skill-icon" />
              <h3>Languages</h3>
              <p>{skills.languages.join(" • ")}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="skill-card"
            >
              <FaServer className="skill-icon" />
              <h3>Frameworks</h3>
              <p>{skills.frameworks.join(" • ")}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="skill-card"
            >
              <FaDatabase className="skill-icon" />
              <h3>Databases & Warehouses</h3>
              <p>{skills.databases.join(" • ")}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="skill-card"
            >
              <FaLaptop className="skill-icon" />
              <h3>Tools & DevOps</h3>
              <p>{skills.tools.join(" • ")}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="skill-card"
            >
              <FaCloud className="skill-icon" />
              <h3>Cloud Platforms</h3>
              <p>{skills.cloud.join(" • ")}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.footer
          variants={itemVariants}
          className="footer"
        >
          <p>
            <FaHeart className="inline-icon" /> Built with love, just like Monica's cookies
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Home; 