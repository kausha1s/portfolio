import { useEffect, useState } from 'react';
import axios from 'axios';

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Education = () => {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get('/api/education');
        setEducation(response.data);
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    };

    fetchEducation();
  }, []);

  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="education">
      <h1>Education</h1>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <div className="education-card">
              <h3>
                {edu.degree} in {edu.field}
              </h3>
              <p className="school">{edu.school}</p>
              <p className="date">
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
              <p className="description">{edu.description}</p>
            </div>
            {index < education.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 