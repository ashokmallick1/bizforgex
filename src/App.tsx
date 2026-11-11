import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SERVICES } from './data/servicesData';
import type { ServiceItem } from './data/servicesData';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenConsultation = (serviceId?: string) => {
    if (serviceId) {
      const found = SERVICES.find((s) => s.id === serviceId);
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
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky top banner & navigation */}
      <Navbar
        onSelectService={(id) => handleOpenConsultation(id)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main hero with conversion funnel */}
      <main className="flex-grow">
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectService={(id) => handleOpenConsultation(id)}
        />

        {/* Dynamic & searchable services grid matching Lincenzo's catalog */}
        <ServicesGrid
          onSelectServiceModal={handleSelectServiceModal}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 4-Step working process */}
        <Process onOpenConsultation={() => handleOpenConsultation()} />

        {/* Why choose Bizforgex & real testimonials */}
        <WhyUs />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Comprehensive legal footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Floating Action WhatsApp & Call Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <a
          href="https://wa.me/918920544114?text=Hi%20Bizforgex%2C%20I%20need%20assistance%20with%20company%20registration%20and%20compliance."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/50 transition-all hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline-block">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Lead generation modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
