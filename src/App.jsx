import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/landing/Home';
import { About } from './components/landing/About';
import { Footer } from './components/common/Footer';
import { Contact } from './components/landing/Contact';
import { MainNav } from './components/common/MainNav';
import { FAQ } from './components/landing/FAQ';
import { Services } from './components/landing/Services';
import { Navbar } from './components/common/Navbar';
import { Pricing } from './components/landing/Pricing';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
