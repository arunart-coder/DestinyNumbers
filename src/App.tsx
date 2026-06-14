import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, WhatsAppCTA } from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import ToolsPage from './pages/Tools';
import AboutPage from './pages/About';
import CalculatorPage from './pages/Calculator';
import CompatibilityCalculator from './pages/CompatibilityCalculator';
import MobileNumerologyLanding from './pages/MobileNumerologyLanding';
import MobileAnalyser from './pages/MobileAnalyser';
import BrandAuditor from './pages/BrandAuditor';
import Academy from './pages/Academy';
import { ConsultationPlans } from './pages/ConsultationPlans';
import { BrandProvider } from './lib/BrandContext';
import { CMSProvider } from './context/CMSContext';
import { AuthProvider } from './context/AuthContext';
import { AdminDrawer } from './components/AdminDrawer';
import BlogListing from './pages/BlogListing';
import BlogPostPage from './pages/BlogPost';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminLogin from './pages/Admin/Login';
import BlogEditor from './pages/Admin/BlogEditor';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import Numerology from './pages/Numerology';
import DashaTransitAnalysis from './pages/DashaTransitAnalysis';
import HoroscopeAnalysis from './pages/HoroscopeAnalysis';
import AncientWisdom from './pages/AncientWisdom';
import GeminiSutras from './pages/GeminiSutras';
import Vastu from './pages/Vastu';
import Tarot from './pages/Tarot';
import FreeTarotReading from './pages/FreeTarotReading';
import WristWatchAnalysis from './pages/WristWatchAnalysis';
import SignatureAnalysis from './pages/SignatureAnalysis';
import BusinessNameNumerology from './pages/BusinessNameNumerology';
import NameCorrection from './pages/NameCorrection';
import CareerGuidance from './pages/CareerGuidance';
import RelationshipCompatibility from './pages/RelationshipCompatibility';
import MarriageMatching from './pages/MarriageMatching';
import GemstoneConsultation from './pages/GemstoneConsultation';
import ChakraBalancing from './pages/ChakraBalancing';
import AuraCleansing from './pages/AuraCleansing';
import SpiritualAlignment from './pages/SpiritualAlignment';
import ReikiMaster from './pages/ReikiMaster';
import DistanceReiki from './pages/DistanceReiki';
import CrystalReiki from './pages/CrystalReiki';
import OfficeVastu from './pages/OfficeVastu';
import CommercialVastu from './pages/CommercialVastu';
import IndustrialVastu from './pages/IndustrialVastu';
import VastuCorrections from './pages/VastuCorrections';
import WealthVastu from './pages/WealthVastu';
import Products from './pages/Products';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CMSProvider>
      <AuthProvider>
        <BrandProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-[80px] lg:pt-[120px]">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/numerology" element={<Numerology />} />
                  <Route path="/services/dasha-transit" element={<DashaTransitAnalysis />} />
                  <Route path="/services/horoscope" element={<HoroscopeAnalysis />} />
                  <Route path="/services/ancient-wisdom" element={<AncientWisdom />} />
                  <Route path="/services/gemini-sutras" element={<GeminiSutras />} />
                  <Route path="/services/vastu" element={<Vastu />} />
                  <Route path="/services/tarot" element={<Tarot />} />
                  <Route path="/services/free-tarot-reading" element={<FreeTarotReading />} />
                  <Route path="/services/wrist-watch-analysis" element={<WristWatchAnalysis />} />
                  <Route path="/services/signature-analysis" element={<SignatureAnalysis />} />
                  <Route path="/services/business-name-numerology" element={<BusinessNameNumerology />} />
                  <Route path="/services/name-correction" element={<NameCorrection />} />
                  <Route path="/services/career-guidance" element={<CareerGuidance />} />
                  <Route path="/services/relationship-compatibility" element={<RelationshipCompatibility />} />
                  <Route path="/services/marriage-matching" element={<MarriageMatching />} />
                  <Route path="/services/gemstone-consultation" element={<GemstoneConsultation />} />
                  <Route path="/services/chakra-balancing" element={<ChakraBalancing />} />
                  <Route path="/services/aura-cleansing" element={<AuraCleansing />} />
                  <Route path="/services/spiritual-alignment" element={<SpiritualAlignment />} />
                  <Route path="/services/reiki-master" element={<ReikiMaster />} />
                  <Route path="/services/distance-reiki" element={<DistanceReiki />} />
                  <Route path="/services/crystal-reiki" element={<CrystalReiki />} />
                  <Route path="/services/office-vastu" element={<OfficeVastu />} />
                  <Route path="/services/commercial-vastu" element={<CommercialVastu />} />
                  <Route path="/services/industrial-vastu" element={<IndustrialVastu />} />
                  <Route path="/services/vastu-corrections" element={<VastuCorrections />} />
                  <Route path="/services/wealth-vastu" element={<WealthVastu />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/calculator" element={<CalculatorPage />} />
                  <Route path="/compatibility" element={<CompatibilityCalculator />} />
                  <Route path="/mobile-numerology" element={<MobileNumerologyLanding />} />
                  <Route path="/analyser/mobile" element={<MobileAnalyser />} />
                  <Route path="/brand-auditor" element={<BrandAuditor />} />
                  <Route path="/academy" element={<Academy />} />
                  <Route path="/blog" element={<BlogListing />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/consultation" element={<ConsultationPlans />} />
                  <Route path="/admin" element={<AdminLogin />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/blog/new" element={<BlogEditor />} />
                  <Route path="/admin/blog/edit/:id" element={<BlogEditor />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsConditions />} />
                  <Route path="/refund" element={<RefundPolicy />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppCTA />
              <AdminDrawer />
            </div>
          </Router>
        </BrandProvider>
      </AuthProvider>
    </CMSProvider>
  );
}

