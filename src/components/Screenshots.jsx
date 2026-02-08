import { useState } from 'react';
import '../styles/screenshots.css';
import signupProfileImg from '../assets/screenshots/signup-profile.jpeg';
import loginAuthImg from '../assets/screenshots/login-auth.jpeg';
import homeNearbySalonsImg from '../assets/screenshots/home-nearby-salons.jpeg';
import bookingServicesImg from '../assets/screenshots/booking-services.jpeg';
import bookingReviewImg from '../assets/screenshots/booking-review.jpeg';

function Screenshots() {
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    {
      image: signupProfileImg,
      title: 'Sign Up & Profile',
      caption: 'User registration with profile customization and preferences setup'
    },
    {
      image: loginAuthImg,
      title: 'Login & Authentication',
      caption: 'Secure authentication with email/password and Google Sign-In options'
    },
    {
      image: homeNearbySalonsImg,
      title: 'Home & Nearby Salons',
      caption: 'Browse nearby salons with real-time availability and ratings'
    },
    {
      image: bookingServicesImg,
      title: 'Booking Services',
      caption: 'Select services, choose time slots, and confirm appointments instantly'
    },
    {
      image: bookingReviewImg,
      title: 'Booking Review',
      caption: 'Review appointment details and manage booking confirmations'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="screenshots">
      <div className="screenshots-container">
        <h2 className="section-title">App Screenshots</h2>
        <p className="section-subtitle">
          Clean, intuitive interface designed with Material Design 3
        </p>
        <div className="screenshots-grid">
          {screenshots.map((screen, index) => (
            <div 
              key={index} 
              className="screenshot-card"
              onClick={() => openModal(screen.image)}
            >
              {/* Wrapper provides consistent container for portrait screenshots */}
              <div className="screenshot-image-wrapper">
                <img 
                  src={screen.image} 
                  alt={screen.title}
                  className="screenshot-image"
                />
              </div>
              <h3 className="screenshot-title">{screen.title}</h3>
              <p className="screenshot-caption">{screen.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal displays full screenshot without cropping */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image-wrapper">
              <img src={selectedImage} alt="Screenshot preview" className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Screenshots;
