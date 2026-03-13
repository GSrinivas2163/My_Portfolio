import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-item">
            <h3>Data Analyst</h3>
            <h4>University At Albany | Jan 2025 – Dec 2025</h4>
            <div className="tags">
            <span>Python</span>, <span>PyTorch</span>, <span>TensorFlow</span>, <span>scikit-learn</span>, <span>NumPy</span>, <span>Pandas</span>, <span>OpenCV</span>, <span>Matplotlib</span>, <span>Seaborn</span>, <span>Jupyter Notebook</span>, <span>Linux</span>, <span>Git</span>, <span>CUDA</span>, <span>3D CNN</span>, <span>CNN-LSTM</span>.
            </div>
            <ul className="highlights">
              <li>Developed robust data processing frameworks using PySpark, SQL, and Databricks on AWS EMR, implementing Delta Lake for ACID transactions, schema enforcement, and real-time streaming using Apache Kafka, boosting data reliability by 25%</li>
              <li>Designed and deployed 15+ scalable data pipelines across AWS (S3, Glue, Lambda) and on-premise Hadoop environments (HDFS, Hive, Spark), improving ETL performance, reducing data latency by 35%, and ensuring compliance with data governance standards</li>
              <li>Optimized Snowflake performance by partition pruning, clustering keys, and query profiling, improving dashboard load times by 60%</li>
              <li>Engineered CI/CD pipelines with Jenkins and GitLab CI, automating infrastructure provisioning using Terraform and Python scripts, reducing deployment time for data applications by 20%</li>
              <li>Created automated ETL workflows using Apache NiFi and Informatica, integrating structured and semi-structured data sources including RDBMS (DB2, SQL Server), REST APIs, and market data feeds with embedded data quality checks and audit logging</li>
              <li>Led mentorship and onboarding for 2 junior engineers and cross-functional analysts on modern data stack tools and data engineering best practices, accelerating project delivery by 25% and improving data quality metrics by 30%</li>
              <li>Developed 15+ enterprise data pipelines using PySpark, Databricks, and AWS, improving ETL performance by 35%</li>
              <li>Optimized Snowflake data warehouse queries, reducing BI dashboard load times by 60%</li>
              <li>Implemented real-time data streaming with Kafka and Delta Lake, enabling relible and scalable data processing</li>
            </ul>
          </div>

          <div className="experience-item">
          <h3>Data Engineer</h3>
          <h4>Quantiphi | Mar 2021 – Nov 2023</h4>
          <div className="tags">
          <span>Microsoft Azure</span>, <span>Azure Data Factory V2</span>, <span>Azure Data Lake Gen2</span>, <span>Azure Databricks</span>, <span>EMR</span>, <span>EC2</span>, <span>Python</span>, <span>Django</span>, <span>Pandas</span>, <span>SQL</span>, <span>MongoDB</span>, <span>Apache Airflow</span>, <span>Apache Spark</span>, <span>PySpark</span>, <span>Kafka</span>, <span>Spark Streaming</span>, <span>Hadoop</span>, <span>Storm</span>, <span>Terraform</span>, <span>Ansible</span>, <span>Git</span>, <span>Shell Scripting</span>, <span>Power BI</span>
          </div>
          <ul className="highlights">
            <li>Designed and deployed Azure-based containerized infrastructure, improving data processing capacity by 20%, and used Python scripts for JSON data handling, modeling, and Django testing</li>
            <li>Configured databases, backend applications, and managed large datasets with Pandas and SQL; built scalable data pipelines for ingestion, translation, and analysis</li>
            <li>Created and automated Airflow DAGs in Python, executing jobs on EMR and EC2 clusters</li>
            <li>Built and tested applications with SQL/NoSQL (MongoDB), installing Python packages for database operations</li>
            <li>Utilized Azure Cluster services and Azure Data Factory V2 to ingest data into Azure Data Lake Gen2</li>
            <li>Implemented CI/CD pipelines, deployed microservices, and provisioned Azure environments using Python and Shell scripting</li>
            <li>Ingested real-time weblogs via Kafka into Spark Streaming, performing data quality checks and validation</li>
            <li>Worked on Big Data integration using Hadoop, PySpark, Kafka, Storm, and webMethods</li>
            <li>Managed Spark Databricks clusters, estimated cluster size, monitored performance, and used Spark DataFrame API for data manipulation</li>
            <li>Maintained CI/CD pipelines and automated environments using Git, Terraform, and Ansible</li>
            <li>Performed data validation in Power BI, identified quality issues, and designed processes to maintain data integrity</li>
          </ul>
        </div>

        


        <h2 className="section-title">Education</h2>

        <div className="experience-item">
          <h3>Master of Science in Information Science in DA/AI</h3>
          <h4>State University of New York, University at Albany, SUNY | Jan 2024 – Dec 2025</h4>
         <p>Specialized in Data Cleaning, ETL, and Data Visualization.</p>
<div className="tags">
  <span>Analysis, Visualization and prediction in Analytics</span>
  <span>Geographic Information Systems</span>
  <span>Database Systems and Data Analysis</span>
  <span>Predictive Modeling</span>
  <span>Data Mining</span>
  <span>Information Environemnt</span>
  <span>Applied Machine Learning</span>
  <span>Administration of Information Agencies</span>
  <span>Information and Knowledge Organization</span>
  <span>Research Methods</span>
  <span>Quantitative Methods and Statistics</span>
</div>


         <div className="experience-item">
           <h3>Bachelor of Science in Computer Science in Cloud Technology & Mobile Application</h3>
         <h4>Jain University, India | Jan 2020 – Dec 2023</h4>
 <div className="tags">
    <span>Linux Administration</span>
    <span>Cloud Migration</span>
    <span>Database Management Systems</span>
    <span>Predictive Modeling</span>
    <span>Data Mining</span>
    <span>Fundamentals of IOS in Swift</span>
    <span>Mobile Application Development using Open Source</span>
    <span>Linux Administration and Agile Software Development</span>
    <span>Cloud Computing</span>
    <span>Infrastructure Solutions on Cloud</span>
    <span>Artificial Intelligence and Machine Learning</span>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Experience;