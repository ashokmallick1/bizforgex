import { useState } from 'react';
import { Mail, MessageSquare, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar = ({ onOpenConsultation }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleServiceClick = (service: string) => {
    setMobileMenuOpen(false);
    onOpenConsultation(service);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200 text-slate-800">
      {/* Top micro bar */}
      <div className="bg-[#0A1C37] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className="text-[#027D9B] font-bold">Bizforgex</span>
              <span>— India's Trusted Legal & Compliance Platform</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href="mailto:support@bizforgex.com" className="hidden md:flex items-center space-x-1 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#027D9B]" />
              <span>support@bizforgex.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-slate-300">
              <a href="https://www.facebook.com/bizforzex" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 p-1 font-bold text-xs">
                FB
              </a>
              <span className="text-slate-600">·</span>
              <a href="https://www.instagram.com/bizforgex" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 p-1 font-bold text-xs">
                IG
              </a>
              <span className="text-slate-600">·</span>
              <a href="https://www.youtube.com/@bizforgex" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 p-1 font-bold text-xs">
                YT
              </a>
            </div>
            <span className="text-slate-600">|</span>
            <a
              href="https://wa.me/918920544114?text=Hi%20Bizforgex%20Team%2C%20I%20need%20assistance%20with%20company%20registration%20and%20compliance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 89205 44114</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0A1C37] via-[#027D9B] to-sky-500 flex items-center justify-center text-white font-black text-xl shadow-md">
              B
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#0A1C37]">
                BIZFORGE<span className="text-[#027D9B]">X</span>
              </span>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Corporate & Legal Compliance</p>
            </div>
          </div>

          {/* Desktop Mega Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <a href="#" className="text-[#027D9B] hover:text-[#0A1C37] transition-colors">Home</a>

            {/* Startup Registration Dropdown */}
            <div className="relative group py-6 cursor-pointer">
              <span className="flex items-center space-x-1 group-hover:text-[#027D9B] transition-colors">
                <span>Startup Registration</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#027D9B]" />
              </span>
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl py-2 hidden group-hover:block animate-fade-in z-50">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Business Registration</div>
                <button onClick={() => onOpenConsultation('LLP Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">LLP Registration</button>
                <button onClick={() => onOpenConsultation('Company Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Company Registration</button>
                <button onClick={() => onOpenConsultation('Company Registration in USA')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Company Registration in USA</button>
                <button onClick={() => onOpenConsultation('Company Registration in UAE')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Company Registration in UAE</button>
                <button onClick={() => onOpenConsultation('Partnership Firm Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Partnership Firm Registration</button>
                <button onClick={() => onOpenConsultation('Proprietorship Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Proprietorship Registration</button>
                <div className="border-t border-slate-100 my-1"></div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Government Licenses</div>
                <button onClick={() => onOpenConsultation('Startup Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Startup Registration</button>
                <button onClick={() => onOpenConsultation('MSME / Udyam Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">MSME / Udyam Registration</button>
              </div>
            </div>

            {/* Licenses & Compliance Dropdown */}
            <div className="relative group py-6 cursor-pointer">
              <span className="flex items-center space-x-1 group-hover:text-[#027D9B] transition-colors">
                <span>Licenses & Compliance</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#027D9B]" />
              </span>
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 shadow-xl rounded-xl py-2 hidden group-hover:block animate-fade-in z-50">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">BIS & Certifications</div>
                <button onClick={() => onOpenConsultation('BIS Certification')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">BIS Certification</button>
                <button onClick={() => onOpenConsultation('BIS CRS Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">BIS CRS Registration</button>
                <button onClick={() => onOpenConsultation('BIS ISI Mark Certification')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">BIS ISI Mark Certification</button>
                <div className="border-t border-slate-100 my-1"></div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Food & FMCG</div>
                <button onClick={() => onOpenConsultation('FSSAI Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">FSSAI Registration</button>
                <button onClick={() => onOpenConsultation('FSSAI State Licence')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">FSSAI State Licence</button>
                <button onClick={() => onOpenConsultation('FSSAI Central Licence')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">FSSAI Central Licence</button>
                <div className="border-t border-slate-100 my-1"></div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Special Licences</div>
                <button onClick={() => onOpenConsultation('PSARA License Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">PSARA License (Security)</button>
                <button onClick={() => onOpenConsultation('IEC Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">IEC (Import Export Code)</button>
                <button onClick={() => onOpenConsultation('Shop and Establishment License')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Shop & Establishment License</button>
              </div>
            </div>

            {/* Trademark & IP Dropdown */}
            <div className="relative group py-6 cursor-pointer">
              <span className="flex items-center space-x-1 group-hover:text-[#027D9B] transition-colors">
                <span>Trademark & IP</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#027D9B]" />
              </span>
              <div className="absolute top-full left-0 w-60 bg-white border border-slate-200 shadow-xl rounded-xl py-2 hidden group-hover:block animate-fade-in z-50">
                <button onClick={() => onOpenConsultation('Trademark Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Trademark Registration</button>
                <button onClick={() => onOpenConsultation('Trademark Objection')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Trademark Objection</button>
                <button onClick={() => onOpenConsultation('Logo Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Logo Registration</button>
                <button onClick={() => onOpenConsultation('Copyright Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Copyright Registration</button>
                <button onClick={() => onOpenConsultation('Patent Filing')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Patent Filing</button>
              </div>
            </div>

            {/* Tax & Filings Dropdown */}
            <div className="relative group py-6 cursor-pointer">
              <span className="flex items-center space-x-1 group-hover:text-[#027D9B] transition-colors">
                <span>Tax & Filings</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#027D9B]" />
              </span>
              <div className="absolute top-full left-0 w-60 bg-white border border-slate-200 shadow-xl rounded-xl py-2 hidden group-hover:block animate-fade-in z-50">
                <button onClick={() => onOpenConsultation('GST Registration')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">GST Registration</button>
                <button onClick={() => onOpenConsultation('GST Return Filing')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">GST Return Filing</button>
                <button onClick={() => onOpenConsultation('ITR Filing')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">Income Tax (ITR) Filing</button>
                <button onClick={() => onOpenConsultation('ROC Annual Compliance')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer">ROC Annual Compliance</button>
              </div>
            </div>
          </nav>

          {/* Header Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/918920544114"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider bg-[#027D9B] hover:bg-[#0A1C37] shadow-sm transition-all flex items-center space-x-1.5"
            >
              <span>Schedule a call &gt;</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Section: Startup Registration */}
          <div>
            <button
              onClick={() => toggleDropdown('startup')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
            >
              <span>Startup Registration</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'startup' ? 'rotate-180 text-[#027D9B]' : ''}`} />
            </button>
            {openDropdown === 'startup' && (
              <div className="pl-3 space-y-1.5 py-1 text-xs border-l-2 border-[#027D9B] ml-2">
                <button onClick={() => handleServiceClick('Company Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Company Registration</button>
                <button onClick={() => handleServiceClick('LLP Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">LLP Registration</button>
                <button onClick={() => handleServiceClick('Partnership Firm')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Partnership Firm</button>
                <button onClick={() => handleServiceClick('Proprietorship Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Proprietorship Registration</button>
                <button onClick={() => handleServiceClick('MSME Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">MSME Udyam Registration</button>
              </div>
            )}
          </div>

          {/* Section: Licenses & Compliance */}
          <div>
            <button
              onClick={() => toggleDropdown('licenses')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
            >
              <span>Licenses & Compliance</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'licenses' ? 'rotate-180 text-[#027D9B]' : ''}`} />
            </button>
            {openDropdown === 'licenses' && (
              <div className="pl-3 space-y-1.5 py-1 text-xs border-l-2 border-[#027D9B] ml-2">
                <button onClick={() => handleServiceClick('FSSAI Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">FSSAI Food License</button>
                <button onClick={() => handleServiceClick('BIS Certification')} className="block py-1 text-slate-600 hover:text-[#027D9B]">BIS & ISI Mark</button>
                <button onClick={() => handleServiceClick('IEC Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Import Export Code (IEC)</button>
                <button onClick={() => handleServiceClick('PSARA License Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">PSARA Security License</button>
                <button onClick={() => handleServiceClick('Shop and Establishment License')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Shop & Establishment License</button>
              </div>
            )}
          </div>

          {/* Section: Trademark & IP */}
          <div>
            <button
              onClick={() => toggleDropdown('ip')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
            >
              <span>Trademark & IP</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'ip' ? 'rotate-180 text-[#027D9B]' : ''}`} />
            </button>
            {openDropdown === 'ip' && (
              <div className="pl-3 space-y-1.5 py-1 text-xs border-l-2 border-[#027D9B] ml-2">
                <button onClick={() => handleServiceClick('Trademark Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Trademark Filing (™)</button>
                <button onClick={() => handleServiceClick('Logo Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Logo Registration</button>
                <button onClick={() => handleServiceClick('Copyright Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Copyright Registration</button>
                <button onClick={() => handleServiceClick('Patent Filing')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Patent Filing</button>
              </div>
            )}
          </div>

          {/* Section: Tax & Filings */}
          <div>
            <button
              onClick={() => toggleDropdown('tax')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
            >
              <span>Tax & Filings</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'tax' ? 'rotate-180 text-[#027D9B]' : ''}`} />
            </button>
            {openDropdown === 'tax' && (
              <div className="pl-3 space-y-1.5 py-1 text-xs border-l-2 border-[#027D9B] ml-2">
                <button onClick={() => handleServiceClick('GST Registration')} className="block py-1 text-slate-600 hover:text-[#027D9B]">GST Registration</button>
                <button onClick={() => handleServiceClick('GST Return Filing')} className="block py-1 text-slate-600 hover:text-[#027D9B]">GST Return Filing</button>
                <button onClick={() => handleServiceClick('ITR Filing')} className="block py-1 text-slate-600 hover:text-[#027D9B]">Income Tax (ITR) Filing</button>
                <button onClick={() => handleServiceClick('ROC Annual Compliance')} className="block py-1 text-slate-600 hover:text-[#027D9B]">ROC Annual Compliance</button>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider bg-[#027D9B]"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
