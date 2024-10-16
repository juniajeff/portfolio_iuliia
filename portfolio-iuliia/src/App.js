import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import About from './components/About'; // Import About component
import Contact from './components/Contacts'; // Import Contact component
import Home from './components/Home'; // Import Home component
import Projects from './components/Projects'; // Import Projects component
import Skills from './components/Skills'; // Import Skills component


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Here we use the imported components */}
      <Home />       {/* Home component will render here */}
      <About />      {/* About component will render here */}
      <Projects />   {/* Projects component will render here */}
      <Skills />     {/* Skills component will render here */}
      <Contact />    {/* Contact component will render here */}
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);  // Create a root for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
