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
    const timer = setTimeout(() => {
      setLoading(false); // This will trigger the fadeout
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSpinnerFinish = () => {
    setShowSpinner(false); // Hide spinner completely after fadeout
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