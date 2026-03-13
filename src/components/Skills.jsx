import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'R', 'HTML/CSS']
    },
    {
      title: 'Data Analytics',
      skills: ['Data cleaning', 'feature engineering', 'regression analysis', 'probability models', 'hypothesis testing', 'ETL/ELT']
    },
    {
      title: 'Development Methodologies',
      skills: ['Agile', 'Waterfall', 'SDLC']
    },
    {
      title: 'Machine Learning',
      skills: ['Supervised/Unsupervised Learning', 'Classification', 'Clustering', 'Model Evaluation', 'scikit-learn', 'XGBoost']
    },
    {
      title: 'Databases & Storage',
      skills: ['MySQL', 'NoSQL', 'Relational Databases', 'Snowflake', 'ER modeling', 'SQL databases']
    },
    {
      title: 'Cloud and Containerization',
      skills: ['AWS', 'Azure', 'Docker']
    },
    {
      title: 'Source Control and Testing',
      skills: ['Git', 'GitHub', 'CI/CD pipelines', 'Selenium WebDriver', 'Postman']
    },
    {
      title: 'Operating Systems',
      skills: ['Windows', 'iOS', 'MAC-OS', 'Linux']
    },
    {
      title: 'Other Skills',
      skills: ['Microsoft Excel', 'Word', 'Google Sheets', 'PowerPoint']
    },
    {
      title: 'IDEs',
      skills: ['NetBeans', 'Eclipse', 'Visual Studio Code']
    },
    {
      title: 'Visualization & Exploration',
      skills: ['Matplotlib', 'Tableau', 'Power BI', 'Exploratory Data Analysis']
    },
  ];
  

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">TECHNICAL SKILLS</h2>
      <blockquote>"Mastering tools that transform ideas into scalable solutions"</blockquote>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
