import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralSteps from './components/ReferralSteps';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal';
import { Container } from '@mui/material';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <Container>
            <HeroSection onOpenModal={() => setModalOpen(true)} />
            <ReferralSteps />
            <ReferralBenefits onOpenModal={() => setModalOpen(true)} />
            <FAQ />
            <Footer />
            <ReferralModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </Container>
      </header>
    </div>
  );
}

export default App;
