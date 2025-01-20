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
import { LearningCenter } from './pages/LearningCenter';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { RegistrationPage } from './pages/RegistrationPage';
import { Login } from './pages/Login';
import { Tradelines } from './pages/Tradelines';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <MainNav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/learning-center" element={<LearningCenter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tradelines" element={<Tradelines />} />
            {/* <Route path="/how-it-works" element={<HowItWorks />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
