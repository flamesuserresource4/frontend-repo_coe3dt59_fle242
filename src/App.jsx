import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreatIntel from "./components/ThreatIntel";
import Showcase from "./components/Showcase";
import InteractiveScroll from "./components/InteractiveScroll";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','ui-sans-serif'] text-white">
      <Navbar />
      <Hero />
      <InteractiveScroll />
      <ThreatIntel />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
