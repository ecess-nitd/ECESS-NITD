import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import AboutUs from './components/AboutusPage/AboutUs';
import Team from './components/TeamPage/TeamSection';
import Event from './components/Events/EventSection';
import EventDetail from './components/Events/EventDetails'
import Faculty from './components/FacultyPage/Faculty';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import 'remixicon/fonts/remixicon.css';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <GridLoader className="my-loader" color="#36d7b7" />
      ) : (
        <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/faculty" element={<Faculty />} />
            <Route exact path="/events" element={<Event />} />
            <Route exact path='/events/:id' element={ <EventDetail />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
