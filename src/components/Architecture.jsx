import '../styles/architecture.css';

function Architecture() {
  const techStack = [
    {
      category: 'Mobile',
      technologies: ['Flutter', 'Dart', 'Material Design 3', 'Provider / BLoC', 'Flutter Widgets']
    },
    {
      category: 'Backend / Cloud',
      technologies: ['Firebase Authentication', 'Cloud Firestore', 'Cloud Functions', 'Firebase Storage', 'Real-time Listeners']
    },
    {
      category: 'Architecture / Patterns',
      technologies: ['MVVM Pattern', 'Repository Pattern', 'Clean Architecture', 'State Management', 'Dependency Injection']
    },
    {
      category: 'Tools',
      technologies: ['VS Code / Android Studio', 'Firebase Console', 'Git & GitHub', 'Flutter DevTools', 'Postman']
    }
  ];

  return (
    <section className="architecture">
      <div className="architecture-container">
        <h2 className="section-title">Architecture & Tech Stack</h2>
        <p className="section-subtitle">
          Modern Flutter development with Firebase backend for scalable and maintainable code
        </p>

        <div className="architecture-flow">
          <h3 className="flow-title">Data Flow</h3>
          <div className="flow-diagram">
            <div className="flow-item">
              <div className="flow-box">Mobile App (Flutter)</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-box">Firebase Auth</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-box">Cloud Firestore</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-box">Cloud Functions</div>
            </div>
          </div>
          <p className="flow-description">
            User authentication flows through Firebase Auth, data is stored and retrieved from Firestore with real-time listeners, and Cloud Functions handle backend logic and notifications.
          </p>
        </div>
        
        <div className="tech-stack-grid">
          {techStack.map((stack, index) => (
            <div key={index} className="tech-stack-card">
              <h3 className="stack-category">{stack.category}</h3>
              <ul className="tech-list">
                {stack.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="tech-item">
                    <span className="tech-bullet">•</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="architecture-highlights">
          <div className="highlight-card">
            <h4>Clean Architecture</h4>
            <p>Separation of concerns with distinct layers for UI, domain logic, and data management ensuring maintainability</p>
          </div>
          <div className="highlight-card">
            <h4>Real-time Updates</h4>
            <p>Firestore listeners provide instant data synchronization across all connected devices without manual refresh</p>
          </div>
          <div className="highlight-card">
            <h4>Scalable Design</h4>
            <p>MVVM pattern with state management enables easy testing, debugging, and feature expansion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
