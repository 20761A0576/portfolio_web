import React from "react";
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Cognifyz Technologies",
      period: "Feb 2025 - March 2025",
      description: "Served as a Full Stack Development Intern with exceptional dedication and coordination skills. Demonstrated strong communication abilities and attention to detail. Consistently approached new assignments with enthusiasm, showcasing passion for Full Stack Development.",
      technologies: ["Full Stack Development", "Web Development", "Team Collaboration"]
    },
    {
      title: "React.js Developer Intern",
      company: "Slash Mark and AICTE",
      period: "Jan 2025 - March 2025",
      description: "Developed interactive UI components using React.js and optimized for performance. Integrated REST APIs to fetch and display dynamic content, improving application efficiency. Collaborated with designers and backend developers to enhance user experience.",
      technologies: ["React.js", "REST APIs", "UI/UX", "Performance Optimization"]
    },
    {
      title: "Java Developer Intern",
      company: "Slash Mark and AICTE",
      period: "Jan 2024 - April 2024",
      description: "Designed and developed backend applications using Java and SpringBoot. Built RESTful APIs to enable seamless data communication. Enhanced application performance by optimizing database queries.",
      technologies: ["Java", "SpringBoot", "REST APIs", "Database Optimization"]
    },
    {
      title: "Audio Question Answering Intern",
      company: "Jio Platforms Ltd",
      period: "Dec 2022 - Feb 2023",
      description: "Developed an AI-powered model for answering audio-based queries. Implemented Natural Language Processing (NLP) techniques to enhance model accuracy. Optimized speech-to-text conversion for better user experience.",
      technologies: ["AI", "NLP", "Speech-to-Text", "Machine Learning"]
    }
    // {
    //   title: "Senior Full Stack Developer",
    //   company: "Tech Solutions Inc.",
    //   period: "2021 - Present",
    //   description: "Leading a team of developers in building scalable web applications. Implementing modern technologies and best practices.",
    //   technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    // },
    // {
    //   title: "Full Stack Developer",
    //   company: "Digital Innovations",
    //   period: "2019 - 2021",
    //   description: "Developed and maintained multiple client projects. Implemented responsive designs and optimized performance.",
    //   technologies: ["React", "Express", "PostgreSQL", "Redux"]
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "Web Design Studio",
    //   period: "2018 - 2019",
    //   description: "Created modern and interactive user interfaces. Collaborated with designers to implement pixel-perfect designs.",
    //   technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    // }
  ];

  return (
    <div className="experience">
      <section className="experience-hero">
        <div className="experience-content">
          <h1 className="experience-title">Experience</h1>
          <p className="experience-subtitle">My professional journey</p>
        </div>
      </section>

      <section className="experience-timeline">
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
