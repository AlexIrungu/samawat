
import './App.css';
import './index.css'
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
      <Home /> 
      <About />
      <Analytics />
      <Contact />
      <Footer />
      
     
      <BackToTopButton />
     
    
    </div>
  );
}

export default App;
