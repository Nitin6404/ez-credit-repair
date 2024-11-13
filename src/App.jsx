import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/landing/Home';
import { About } from './components/landing/About';
import {Footer}  from './components/common/Footer';
import {Contact} from './components/landing/Contact';
import { MainNav } from './components/common/MainNav';
import {FeQ} from './components/landing/F&Q';
import {Service} from './components/landing/Services';
import {Navbar} from './components/common/Navbar';


function App() {
  return (
    <div>      
      
      <Router>
        <Navbar />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/f&q" element={<FeQ/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;