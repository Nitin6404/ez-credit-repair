import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer } from './components/common/Footer';
import { MainNav } from './components/common/MainNav';
import { Navbar } from './components/common/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Home } from './pages/HomePage';
import { LearningCenter } from './pages/LearningCenter';
import { Login } from './pages/Login';
import { Pricing } from './pages/Pricing';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { RegistrationPage } from './pages/RegistrationPage';
import { Services } from './pages/Services';
import { Tradelines } from './pages/Tradelines';
import { HowItWorks } from './pages/HowItWorks';

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
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
