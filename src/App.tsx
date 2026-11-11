import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PremiumPlatform } from './components/PremiumPlatform';
import { ServicesTabs } from './components/ServicesTabs';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SERVICES } from './data/servicesData';
import type { ServiceItem } from './data/servicesData';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenConsultation = (serviceIdentifier?: string) => {
    if (serviceIdentifier) {
      const found = SERVICES.find(
        (s) => s.id === serviceIdentifier || s.title.toLowerCase().includes(serviceIdentifier.toLowerCase())
      );
      setSelectedService(found || null);
    } else {
      setSelectedService(null);
    }
    setModalOpen(true);
  };

  const handleSelectServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#027D9B] selection:text-white">
      {/* 1. Header with exact Lincenzo Mega Navigation */}
      <Navbar onOpenConsultation={(svc) => handleOpenConsultation(svc)} />

      <main className="flex-grow">
        {/* 2. Hero Section with 4.8★ Stats Bar & Consultation Card */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectService={(id) => handleOpenConsultation(id)}
        />

        {/* 3. Smooth Marquee Strip (Certification, Trademark, Startup, Income Tax, Compliance) */}
        <div className="bg-[#0A1C37] text-white py-3 overflow-hidden border-y border-slate-800">
          <div className="flex space-x-12 animate-pulse text-xs uppercase tracking-widest font-semibold justify-center">
            <span className="flex items-center space-x-2">★ <span>Certification & Licensing</span></span>
            <span className="flex items-center space-x-2">★ <span>Trademark & IP</span></span>
            <span className="flex items-center space-x-2">★ <span>Startup India</span></span>
            <span className="flex items-center space-x-2">★ <span>Income Tax & GST</span></span>
            <span className="flex items-center space-x-2">★ <span>ROC Annual Compliance</span></span>
          </div>
        </div>

        {/* 4. Premium Business Management Platform (Overview + 8 Service Highlights) */}
        <PremiumPlatform onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5. Legal Help Across Wide Range of Services (Business Reg / Govt Reg / Govt Lic Tabs) */}
        <ServicesTabs
          onSelectServiceModal={handleSelectServiceModal}
          onOpenConsultation={(svc) => handleOpenConsultation(svc)}
        />

        {/* 6. Our Working Process (4 Steps) */}
        <Process onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. WHO WE ARE & Features of Our Legal Service + Customer Reviews */}
        <WhyUs />
      </main>

      {/* 8. Full Elementor Style 4-Column Footer */}
      <Footer onOpenConsultation={(svc) => handleOpenConsultation(svc)} />

      {/* Floating Instant WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/918920544114?text=Hi%20Bizforgex%2C%20I%20need%20assistance%20with%20company%20registration%20and%20compliance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-full shadow-2xl shadow-emerald-600/50 transition-all hover:scale-105"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
