import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Architecture from './components/Architecture';
import DemoVideo from './components/DemoVideo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Screenshots />
      <Architecture />
      <DemoVideo />
      <Footer />
    </div>
  );
}

export default App;
