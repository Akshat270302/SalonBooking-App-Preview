import '../styles/hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Salon Booking App</h1>
          <p className="hero-description">
            A cross-platform mobile application with real-time Firebase-powered booking 
            system for seamless salon appointment management
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('.demo-video')}
            >
              Watch Demo
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('.screenshots')}
            >
              View Screenshots
            </button>
          </div>
          <div className="hero-tech-stack">
            <span className="tech-badge">Flutter & Dart</span>
            <span className="tech-badge">Firebase</span>
            <span className="tech-badge">Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
