import { useState } from 'react';
import { Phone, Mail, Clock, MessageSquare, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar = ({ onSelectService, onOpenConsultation }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Mon - Sat: 9:30 AM - 7:30 PM IST</span>
          </div>
          <div className="hidden md:flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <a href="mailto:contact@bizforgex.com" className="hover:text-white transition-colors">contact@bizforgex.com</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/918920544114?text=Hi%20Bizforgex%20Team%2C%20I%20need%20assistance%20with%20business%20registration%20and%20compliance."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Instant WhatsApp Support</span>
          </a>
          <span className="text-slate-600">|</span>
          <div className="flex items-center space-x-1 text-slate-200">
            <Phone className="w-3 h-3 text-blue-400" />
            <a href="tel:+918920544114" className="hover:text-white font-medium">+91 89205 44114</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20">
              B
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                BIZFORGE<span className="text-blue-600">X</span>
              </span>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Corporate & Legal Compliance</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">Popular Services</a>
            <button onClick={() => onSelectService('pvt-ltd')} className="hover:text-blue-600 transition-colors cursor-pointer">Incorporate</button>
            <a href="#process" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Bizforgex</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verify Compliance</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Popular Services
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onSelectService('pvt-ltd');
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Incorporate Business
          </button>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            How It Works
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Why Bizforgex
          </a>
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg text-white bg-blue-600 font-semibold shadow-md"
            >
              Book Free Expert Consultation
            </button>
            <a
              href="https://wa.me/918920544114"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 rounded-lg text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
