import '../styles/features.css';

function Features() {
  const features = [
    {
      icon: '�',
      title: 'Firebase Authentication',
      description: 'Secure user login with Firebase Auth supporting email/password and Google Sign-In integration'
    },
    {
      icon: '⚡',
      title: 'Real-time Booking Engine',
      description: 'Live appointment availability powered by Firestore real-time listeners and optimistic UI updates'
    },
    {
      icon: '📊',
      title: 'Booking Status Tracking',
      description: 'End-to-end appointment lifecycle management with status updates, notifications, and history'
    },
    {
      icon: '☁️',
      title: 'Firebase Backend Integration',
      description: 'Cloud Firestore for data persistence, Cloud Functions for business logic, and Cloud Storage for media'
    },
    {
      icon: '🎨',
      title: 'Material Design 3 UI',
      description: 'Modern UI components following Material Design principles for a beautiful user experience'
    },
    {
      icon: '🏗️',
      title: 'Scalable Architecture',
      description: 'MVVM pattern with Repository layer, Dependency Injection via Hilt, and Clean Architecture principles'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="section-title">Key Features</h2>
        <p className="section-subtitle">
          Technical highlights and architectural decisions
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
