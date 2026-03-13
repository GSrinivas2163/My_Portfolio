import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Full-Stack Software Development Engineer building scalable applications and intelligent systems.</h3>
         <p>
         Seasoned Data Analyst and AI Researcher with <strong>3+ years</strong> of industry experience, adept in designing and implementing data-driven solutions and advanced machine learning models across healthcare and analytics domains.
</p>
<p>
Proficient in <strong>Python</strong>, <strong>SQL</strong>, and <strong>R</strong>, with strong expertise in <strong>data cleaning</strong>, <strong>feature engineering</strong>, <strong>regression analysis</strong>, <strong>hypothesis testing</strong>, and <strong>exploratory data analysis (EDA)</strong>.
</p>
<p>
Experienced in developing and evaluating machine learning models including <strong>3D-CNNs</strong>, <strong>classification</strong>, <strong>clustering</strong>, and <strong>XGBoost</strong> using <strong>PyTorch</strong> and <strong>scikit-learn</strong>, with practical exposure to large-scale healthcare datasets. Skilled in data visualization using <strong>Matplotlib</strong>, <strong>Seaborn</strong>, <strong>Tableau</strong>, and <strong>Power BI</strong> to deliver actionable business insights.
</p>


            <div className="about-details">
              <div>
                <strong>Name:</strong> Srinivas Gopavarapu
              </div>
              <div>
                <strong>Email:</strong> leelasrinivasus@gmail.com
                              </div>
              <div>
                <strong>Availability:</strong> Full-time
              </div>
            </div>
            <blockquote>
              "The only way to do great work is to love what you do."
            </blockquote>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h4>3+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h4>6+</h4>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
