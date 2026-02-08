import '../styles/demovideo.css';

function DemoVideo() {
  // REPLACE THIS with your actual video URL:
  // For YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID
  // For Google Drive: https://drive.google.com/file/d/YOUR_FILE_ID/preview
  const videoUrl = 'https://www.youtube.com/embed/_iGi2TdYsyg';

  return (
    <section className="demo-video">
      <div className="demo-container">
        <h2 className="section-title">App Demo Video</h2>
        <p className="section-subtitle">
          Watch a complete walkthrough of the app's key features and user experience
        </p>
        
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src={videoUrl}
              title="App Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </div>

        <div className="demo-features">
          <div className="demo-feature">
            <span className="demo-icon">✓</span>
            <span>User onboarding & authentication</span>
          </div>
          <div className="demo-feature">
            <span className="demo-icon">✓</span>
            <span>Browse salons and services</span>
          </div>
          <div className="demo-feature">
            <span className="demo-icon">✓</span>
            <span>Real-time booking process</span>
          </div>
          <div className="demo-feature">
            <span className="demo-icon">✓</span>
            <span>Payment and confirmation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoVideo;
