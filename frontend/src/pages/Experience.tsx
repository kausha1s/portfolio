import { motion } from 'framer-motion';
import { FaGraduationCap, FaServer, FaTrophy, FaCoffee, FaCloud, FaLaptop } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "Eka.Care",
      episodeTitle: "The One With All The Code",
      role: "Software Engineer 2, Tech Platforms",
      period: "January 2023 - Present",
      location: "Bangalore",
      description: [
        "Designed and scaled a high-throughput messaging platform supporting over 1M daily user notifications, achieving 99.9% system availability",
        "Built a secure webhook system enabling real-time data delivery for 20+ clients, leveraging symmetric encryption for data security",
        "Built a URL minification service replacing Branch, handling 60K+ daily requests across app/web links, deep and deferred linking",
        "Enhanced WhatsApp notification infrastructure by migrating from on-premise to Cloud APIs, improving throughput by 200%",
        "Exposed APIs for external partners and wrote custom middleware to validate and authenticate incoming requests",
        "Developed robust Telemedicine APIs supporting 100+ daily consultations using Golang and microservices",
        "Optimized AWS costs by 35% by replacing Kinesis streams with a Kafka-based architecture integrated with AWS Lambda",
        "Migrated entire data workload from AWS to GCP, achieving 25% cost reduction and higher throughput"
      ],
      tech: "Go, Python, FastAPI, Kafka, Redis, MySQL, DynamoDB, Docker, CloudFront, Lambda, Cloud Functions, Firebase",
      icon: <FaCoffee />
    },
    {
      company: "IBM",
      episodeTitle: "The One At The Big Blue",
      role: "Software Engineer, MQ",
      period: "June 2021 - January 2023",
      location: "Bangalore",
      description: [
        "Contributed to the WebSphere MQ team, focusing on high-availability architecture, resulting in a 20% reduction in message transmission latency",
        "Designed and implemented Java programs to handle 1K+ transaction messages per second across applications and cloud platforms",
        "Developed and maintained critical messaging infrastructure components using Java and Python",
        "Collaborated with global teams to implement new features and resolve complex system issues",
        "Participated in code reviews and mentored junior developers in best practices and system architecture"
      ],
      tech: "Java, WebSphere MQ, Docker, Python, IBM Cloud",
      icon: <FaCloud />
    },
    {
      company: "Madhya Pradesh Power Management Company",
      episodeTitle: "The One With The Power",
      role: "Machine Learning Intern",
      period: "May 2020 - July 2020",
      location: "Remote",
      description: [
        "Developed a machine learning model to forecast electricity demand across Madhya Pradesh",
        "Implemented time series analysis using SARIMA and Prophet models to predict daily power consumption",
        "Created a web interface using Django for visualizing forecasts and historical data",
        "Achieved 92% accuracy in predicting daily power demand, helping in efficient power distribution",
        "Integrated the system with existing infrastructure for real-time data processing"
      ],
      tech: "Python, Django, PostgreSQL, Scikit-learn, Prophet, Pandas",
      icon: <FaLaptop />
    },
    {
      company: "IIIT Jabalpur",
      episodeTitle: "The One With The Research",
      role: "Research Assistant",
      period: "Jan 2020 - May 2020",
      location: "Jabalpur",
      description: [
        "Conducted research on wildlife detection systems using computer vision and deep learning",
        "Developed an Android application for real-time animal detection using TensorFlow Lite",
        "Implemented a custom CNN architecture achieving 89% accuracy in species classification",
        "Created an IoT system for automated wildlife monitoring and alert generation",
        "Published findings in the institute's technical journal"
      ],
      tech: "Python, TensorFlow, OpenCV, Android, Firebase, IoT",
      icon: <FaServer />
    }
  ];

  const education = [
    {
      school: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY JABALPUR",
      episodeTitle: "The One With The Engineering Degree",
      degree: "Bachelor in Computer Science & Engineering",
      period: "2017 - 2021",
      location: "Jabalpur",
      grade: "CGPA: 7.7/10",
      highlights: [
        "Core team member of the college's technical society",
        "Published research paper on wildlife detection systems",
        "Won multiple coding competitions and hackathons",
        "Led the development of college's bus booking portal"
      ]
    },
    {
      school: "KENDRIYA VIDYALAYA",
      episodeTitle: "The One Before College",
      degree: "Senior Secondary",
      period: "2016",
      location: "Varanasi",
      grade: "Class XII CBSE(2016) PCM(Score: 94.2%)",
      highlights: [
        "School topper in Mathematics and Computer Science",
        "President of the school's computer club",
        "Participated in national level science exhibitions"
      ]
    }
  ];

  const achievements = [
    { year: 2019, achievement: "All India Rank 29", exam: "National Creativity Aptitude Test", episodeTitle: "The One With The Creative Mind" },
    { year: 2017, achievement: "All India Rank 13336", exam: "JEE Advanced", episodeTitle: "The One With The Big Test" },
    { year: 2017, achievement: "All India Rank 14908", exam: "JEE Mains", episodeTitle: "The One With The First Try" },
    { year: 2016, achievement: "Top 2 percentile", exam: "CBSE Senior Secondary", episodeTitle: "The One With The High Scores" },
    { year: 2014, achievement: "Top 1 percentile", exam: "CBSE Secondary", episodeTitle: "The One Where It All Began" }
  ];

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
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="page-title"
        >
          The One With All The Experience
        </motion.h1>
        
        <motion.div 
          className="experience-list"
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="experience-card"
            >
              <motion.div 
                className="experience-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {exp.icon}
              </motion.div>
              <h2 className="company">{exp.company}</h2>
              <h3 className="episode-title">{exp.episodeTitle}</h3>
              <h4>{exp.role}</h4>
              <p className="location-date">{exp.location} | {exp.period}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="tech-stack">Tech Stack: {exp.tech}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="section-title"
        >
          The One With The Education
        </motion.h2>
        
        <motion.div 
          className="education-list"
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
              className="education-card"
            >
              <motion.div 
                className="education-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <FaGraduationCap />
              </motion.div>
              <h2 className="school">{edu.school}</h2>
              <h3 className="episode-title">{edu.episodeTitle}</h3>
              <h4>{edu.degree}</h4>
              <p className="location-date">{edu.location} | {edu.period}</p>
              <p className="grade">{edu.grade}</p>
              <ul className="highlights">
                {edu.highlights.map((highlight, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="section-title"
        >
          The One With The Achievements
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          className="achievements-section"
        >
          <motion.div 
            className="achievements-grid"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                }}
                className="achievement-item"
              >
                <motion.div 
                  className="achievement-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaTrophy />
                </motion.div>
                <h3 className="episode-title">{achievement.episodeTitle}</h3>
                <h4>{achievement.exam}</h4>
                <p>{achievement.achievement} ({achievement.year})</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience; 