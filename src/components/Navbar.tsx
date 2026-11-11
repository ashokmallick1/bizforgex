import { Mail, MessageSquare, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar = ({ onOpenConsultation }: NavbarProps) => {
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

          {/* Mega Nav Links (exact Lincenzo hierarchy) */}
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

          {/* Header Action CTA */}
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/918920544114"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider bg-[#027D9B] hover:bg-[#0A1C37] shadow-sm transition-all flex items-center space-x-1.5"
            >
              <span>Schedule a call &gt;</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
