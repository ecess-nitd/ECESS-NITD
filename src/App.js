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
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Preload ALL critical images before showing app
    const preloadAllImages = async () => {
      const allImages = [
        // Logo
        '/images/logos/ecess-logo.png',
        
        // Carousel slides
        '/images/carousel/slide-1.jpg',
        '/images/carousel/slide-2.jpeg',
        '/images/carousel/slide-3.jpeg',
        
        // Featured events (only the 4 shown on home page)
        '/images/events/exordium-2.jpg',
        '/images/events/innovacion.jpg',
        '/images/events/vlsi-workshop.jpg',
        '/images/events/tech-talk.jpg',
        
        // Team members (only the ones shown on home page)
        '/images/team/dhritishree-saha.jpeg',
        '/images/team/manas-mahata.jpeg',
        '/images/team/mohammed-asif.jpeg',
        '/images/team/animesh-punetha.jpeg',
        '/images/team/r-charisma-alex.jpeg',
        '/images/team/tina-ghosh.jpeg',
        '/images/team/sarmistha-naskar.jpeg',
        '/images/team/soumyadeep-chakraborty.jpeg',
        '/images/team/vipin-sharma.jpeg',
        '/images/team/tanushri-ghosh.jpeg',
        '/images/team/anisha-kumari.jpeg',
        '/images/team/jayesh-toshniwal.jpeg',
        '/images/team/sagnik-dutta.jpeg',
      ];

      let loadedCount = 0;
      const totalImages = allImages.length;

      try {
        // Start preloading all images with progress tracking
        const imagePromises = allImages.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setLoadingProgress((loadedCount / totalImages) * 100);
              resolve(src);
            };
            img.onerror = () => {
              console.warn(`Failed to load: ${src}`);
              loadedCount++;
              setLoadingProgress((loadedCount / totalImages) * 100);
              resolve(src); // Continue even if image fails
            };
            img.src = src;
          });
        });

        // Wait for ALL images to load (or timeout)
        await Promise.race([
          Promise.all(imagePromises),
          new Promise(resolve => setTimeout(resolve, 15000)) // 15 second timeout
        ]);
        
        console.log(`Loaded ${loadedCount}/${totalImages} images successfully`);
      } catch (error) {
        console.warn('Image preloading failed:', error);
      }

      // Hide loading spinner only when everything is loaded
      setLoading(false);
    };

    preloadAllImages();
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
          loadingProgress={loadingProgress}
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