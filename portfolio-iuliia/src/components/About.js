import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am Iuliia Korennova, an innovative backend engineer and researcher with comprehensive expertise in AI-based 
        application security and media technologies. I specialize in creating innovative software solutions and enhancing 
        digital security. Currently, I am pursuing a double degree in Media & Entertainment and Computer Science at Sogang 
        University, Korea.
      </p>

      <div className="education">
        <h3 className="section-title">Education</h3>
        <ul>
          <li><strong>Bachelor's in Psychology</strong>, Academy of Social Management, Russia (2018)</li>
          <li><strong>Korean Language Education</strong>, Sejong University, Korea (2019-2021)</li>
          <li><strong>Media & Entertainment / Computer Science</strong>, Sogang University, Korea (expected 2025)</li>
        </ul>
      </div>

      <div className="languages">
        <h3 className="section-title">Languages</h3>
        <ul>
          <li>Korean: Intermediate (Speaking, Listening), Advanced (Reading, Writing)</li>
          <li>English: Advanced (All skills)</li>
          <li>Russian: Native proficiency</li>
        </ul>
      </div>

      <div className="skills">
        <h3 className="section-title">Skills</h3>
        <ul>
          <li>Programming Languages: Python, Java, SQL, C, C++, JavaScript, Kotlin</li>
          <li>Web Technologies: HTML, CSS</li>
          <li>Frameworks: React, Node.js, Django, Enact</li>
          <li>Tools: Git, Docker, Jenkins</li>
          <li>Platforms: Linux, Windows, WebOS</li>
          <li>Media Editing: Adobe Premiere, Final Cut Pro</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
