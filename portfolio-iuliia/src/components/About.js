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
        저는 율리야 코렌노바(Iuliia Korennova)이며, AI 기반 애플리케이션 보안 및 미디어 기술에 대한 포괄적인 전문 지식을 가진 
        혁신적인 백엔드 엔지니어이자 연구원입니다. 저는 혁신적인 소프트웨어 솔루션을 개발하고 디지털 보안을 강화하는 데 특화되어
        있습니다. 현재 저는 한국 서강대학교에서 미디어 & 엔터테인먼트와 컴퓨터 과학 복수 전공을 이수하고 있습니다.
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
