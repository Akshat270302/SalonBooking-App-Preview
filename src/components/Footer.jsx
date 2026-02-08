import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SalonSync</h3>
            <p className="footer-description">
              A portfolio project demonstrating modern Android development 
              with Kotlin and Firebase integration.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#demo">Demo</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Technologies</h4>
            <ul className="footer-links">
              <li>Kotlin</li>
              <li>Jetpack Compose</li>
              <li>Firebase</li>
              <li>Material Design 3</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Portfolio</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 SalonSync - Internship Portfolio Project
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
