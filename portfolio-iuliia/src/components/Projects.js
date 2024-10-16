import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>AI Fitness App Development (2024)</h3>
          <p>
            Led the development of a fitness application using AI recognition technologies to improve user interaction 
            and exercise efficiency. This project enhanced my ability to work with AI technologies and user interface design.
          </p>
        </div>

        <div className="project-item">
          <h3>Capstone Design Project (2023)</h3>
          <p>
            Participated in the development of a media player application, focusing on improving functionality and user interface. 
            I utilized my skills in React, WebOS, DB, and backend development.
          </p>
        </div>

        <div className="project-item">
          <h3>Compiler Design Project (2023)</h3>
          <p>
            Developed a compiler with a focus on efficient code compilation and optimization techniques. 
            This project strengthened my knowledge of low-level programming and optimization.
          </p>
        </div>

        <div className="project-item">
          <h3>Information Security Project (2023)</h3>
          <p>
            Analyzed and identified software code vulnerabilities, and proposed robust security measures 
            to prevent potential breaches, showcasing my skills in cybersecurity.
          </p>
        </div>

        <div className="project-item">
          <h3>Game Development Project (2022)</h3>
          <p>
            Developed a simple game as part of a game development class, applying programming skills 
            and creative problem-solving to build game mechanics and functionality.
          </p>
        </div>

        <div className="project-item">
          <h3>Backend and Database Management for Language School Website (2023 - Present)</h3>
          <p>
            Currently developing the backend and managing the database for the language school website at Sogang University. 
            This project focuses on improving website accessibility and user engagement, showcasing my backend engineering 
            and database management skills using technologies like Django and SQL.
          </p>
        </div>

        <div className="project-item">
          <h3>AI Chatbot Project</h3>
          <p>
            This project demonstrates how my AI chatbot works, using machine learning and natural language processing 
            to interact with users in real-time. Watch the video below for a detailed explanation and demo.
          </p>
                    {/* Embed the video here */}
         <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BuWwlUhRL_k"
              title="AI Chatbot Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
