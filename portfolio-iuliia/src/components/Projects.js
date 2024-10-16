import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>프로젝트</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>게임 개발 프로젝트 (2022)</h3>
          <p>
            게임 개발 수업의 일환으로 간단한 게임을 개발하였으며, 프로그래밍 기술과 창의적인 문제 해결 능력을 사용하여 
            게임 메커니즘과 기능을 구축하였습니다.
          </p>
        </div>

        <div className="project-item">
          <h3>컴파일러 설계 프로젝트 (2023)</h3>
          <p>
            효율적인 코드 컴파일 및 최적화 기술에 중점을 두어 컴파일러를 개발하였습니다. 
            이 프로젝트를 통해 저수준 프로그래밍 및 최적화에 대한 지식을 강화하였습니다.
          </p>
        </div>

        <div className="project-item">
          <h3>정보 보안 프로젝트 (2023)</h3>
          <p>
            소프트웨어 코드 취약점을 분석하고 식별하여 잠재적인 침해를 방지하기 위한 강력한 보안 조치를 제안하였습니다. 
            이를 통해 사이버 보안 관련 기술을 선보였습니다.
          </p>
        </div>

        <div className="project-item">
          <h3>캡스톤 디자인 프로젝트 (2023)</h3>
          <p>
            미디어 플레이어 애플리케이션 개발에 참여하여 기능성과 사용자 인터페이스를 개선하는 데 중점을 두었습니다. 
            React, WebOS, DB, 백엔드 개발 기술을 활용하였습니다.
          </p>
        </div>

        <div className="project-item">
          <h3>언어 학교 웹사이트 백엔드 및 데이터베이스 관리 (2023 - 현재)</h3>
          <p>
            현재 서강대학교 언어학교 웹사이트의 백엔드 개발과 데이터베이스 관리를 담당하고 있습니다. 
            이 프로젝트는 웹사이트 접근성과 사용자 참여를 개선하는 데 중점을 두고 있으며, Django와 SQL과 같은 
            기술을 활용하여 백엔드 엔지니어링 및 데이터베이스 관리 기술을 선보였습니다.
          </p>
        </div>

        <div className="project-item">
          <h3>AI 피트니스 앱 개발 (2024)</h3>
          <p>
            AI 인식 기술을 사용하여 사용자 상호작용과 운동 효율성을 향상시키는 피트니스 애플리케이션 개발을 주도했습니다. 
            이 프로젝트는 AI 기술과 사용자 인터페이스 설계 능력을 향상시켰습니다.
          </p>
        </div>

        <div className="project-item">
          <h3>AI 챗봇 프로젝트</h3>
          <p>
            이 프로젝트는 AI 챗봇이 어떻게 작동하는지 시연하며, 기계 학습과 자연어 처리 기술을 사용하여 
            실시간으로 사용자와 상호작용하는 방식에 대해 보여줍니다. 아래 동영상을 통해 자세한 설명과 데모를 확인할 수 있습니다.
          </p>
          {/* 여기서 동영상을 삽입하세요 */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BuWwlUhRL_k"
              title="AI 챗봇 데모"
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

