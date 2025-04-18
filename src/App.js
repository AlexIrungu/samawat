import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;