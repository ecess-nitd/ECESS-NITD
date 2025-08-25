import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/landing';
import Team from './components/TeamPage/TeamSection';
import Faculty from './components/FacultyPage/Faculty';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import 'remixicon/fonts/remixicon.css';
import ScrollToTop from './components/ScrollToTop';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventSection from './components/Events/EventSection';
import EventDetail from './components/Events/EventDetails';

function App() {
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Preload critical images before showing app
    const preloadCriticalImages = async () => {
      const criticalImages = [
        'https://i.imgur.com/Lg3kv0j.png', // ECESS Logo
        'https://nitdgp.ac.in/uploads/0507284ec43c705a861174910f4d6d17.JPG', // Landing slide 1
      ];

      try {
        // Start preloading critical images
        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(src); // Continue even if image fails
            img.src = src;
          });
        });

        // Wait for critical images with timeout
        await Promise.race([
          Promise.all(imagePromises),
          new Promise(resolve => setTimeout(resolve, 3000)) // 3 second timeout
        ]);
      } catch (error) {
        console.warn('Image preloading failed:', error);
      }

      // Hide loading spinner
      setLoading(false);
    };

    preloadCriticalImages();
  }, []);

  const handleSpinnerFinish = () => {
    setShowSpinner(false);
  };

  return (
    <div className="App">
      {showSpinner && (
        <LoadingSpinner 
          isLoading={loading} 
          onFinish={handleSpinnerFinish}
        />
      )}
      {!showSpinner && (
        <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/faculty" element={<Faculty />} />
            <Route exact path="/events" element={<EventSection />} />
            <Route exact path='/events/:id' element={ <EventDetail />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;