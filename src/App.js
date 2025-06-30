import './App.css';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="nav-left">sabm</div>
        <nav className="nav-right">
          <Link to="about" smooth={true} duration={100} className="nav-link">About</Link>
          <Link to="projects" smooth={true} duration={100} className="nav-link">Projects</Link>
          <Link to="contact" smooth={true} duration={100} className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero" id="home">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Sean Andrei</h1>
            <p className="hero-subtitle">A Computer Engineering Student</p>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-message">
                <p style={{ fontSize: '35px'}}><b>Hello!</b></p>
                <p>I'm a computer engineering student and currently learning how to build websites and apps.</p>
              </div>
              <Link to="projects" smooth={true} duration={100} className="hero-btn">
                <span>Explore Projects</span>
                <svg className="hero-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                Hello! I'm Sean Andrei B. Malapit.
              </p>
              <p className="about-paragraph">
                I'm an incoming fourth-year Computer Engineering student at the Technological Institute of the Philippines, Manila Campus. 
                I enjoy building websites that reflect my interests which is especially around anime and games.
              </p>
              <p className="about-paragraph">
                While I'm still developing my programming skills, I have a basic foundation in Python and web development. 
                I'm eager to learn more and work on more projects.
              </p>
            </div>
            <div className="about-skills">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">HTML</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Programming Language</h3>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <a href="https://courtify.onrender.com" target="_blank" rel="noreferrer" className="project-view-btn">
                View <span className="project-arrow"></span>
              </a>
              <div className="project-number">01</div>
              <div className="project-content">
                <h3 className="project-title">Courtify</h3>
                <p className="project-description">
                  A software design school project for booking and finding basketball courts.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML/CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Node.js/Express.js</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-text">
              <h2 className="contact-title">Contact Me</h2>
              <p className="contact-description">
                If you have any questions, feel free to contact me through my contacts below.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:seanandrei700@gmail.com" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>Email</span>
              </a>
              <a href="https://github.com/dreidrey" className="contact-link" target="_blank" rel="noopener noreferrer"aria-label="Visit my GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.11.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.74 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.84 0C17.81 2.9 18.8 3.21 18.8 3.21c.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.09 0 4.41-2.68 5.39-5.24 5.68.42.37.79 1.1.79 2.22v3.3c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
                </svg>
                <span className="contact-text">Github</span>
              </a>
              <a href="https://ph.linkedin.com/in/sean-andrei-malapit-867a0a30b" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.2 4.6-2.2 4.9 0 5.8 3.2 5.8 7.4V24h-5v-7.3c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.7 1.8-2.7 3.8V24h-5V8z"/>
                </svg>
                <span className="contact-text">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;