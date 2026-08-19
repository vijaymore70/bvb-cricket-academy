import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LegacyStats from './components/LegacyStats';
import TheSquads from './components/TheSquads';
import Methodology from './components/Methodology';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-charcoal-900 min-h-screen text-white overflow-hidden selection:bg-victory-red selection:text-white">
      <Navbar />
      <Hero />
      <LegacyStats />
      <TheSquads />
      <Methodology />
      <Facilities />
      <VideoSection />
      <Gallery />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
