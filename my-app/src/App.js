import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralSteps from './components/ReferralSteps';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal';
import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import FilterButtons from './components/FilterButtons';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <Box>
            <TopBanner />
            <Navbar />
            <FilterButtons />
            <HeroSection onOpenModal={() => setModalOpen(true)} />
            <ReferralSteps />
            <ReferralBenefits onOpenModal={() => setModalOpen(true)} />
            <FAQ />
            <Footer />
            <ReferralModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </Box>
      </header>
    </div>
  );
}

export default App;
