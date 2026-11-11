import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (service?: string) => void;
}

export const Footer = ({ onOpenConsultation }: FooterProps) => {
  return (
    <footer className="bg-[#0A1C37] text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top 4-Column Grid matching Lincenzo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 border-b border-slate-800 pb-12">
          
          {/* Column 1: Company Profile & Contacts */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#027D9B] to-sky-400 flex items-center justify-center text-white font-black text-xl shadow-md">
                B
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                BIZFORGE<span className="text-[#027D9B]">X</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bizforgex is a trusted business compliance and legal services platform, helping startups, MSMEs, and enterprises simplify registrations, certifications, licenses, and regulatory compliance with expert guidance and end-to-end support.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#027D9B] flex-shrink-0 mt-0.5" />
                <span>Madhusudan Nagar / Saheed Nagar, Bhubaneswar, Odisha 751007</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4 text-[#027D9B] flex-shrink-0" />
                <a href="mailto:support@bizforgex.com" className="hover:text-white">support@bizforgex.com</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4 text-[#027D9B] flex-shrink-0" />
                <a href="tel:+918920544114" className="hover:text-white">+91 89205 44114</a>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Follow Us</h4>
              <div className="flex items-center space-x-2">
                <a href="https://www.facebook.com/bizforzex" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-white text-xs font-bold transition-colors">
                  FB
                </a>
                <a href="https://www.instagram.com/bizforgex" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-white text-xs font-bold transition-colors">
                  IG
                </a>
                <a href="https://www.youtube.com/@bizforgex" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center text-white text-xs font-bold transition-colors">
                  YT
                </a>
                <a href="https://wa.me/918920544114" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services (Incorporation) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#027D9B] pl-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onOpenConsultation('Company Registration')} className="hover:text-white transition-colors cursor-pointer">Company Registration</button></li>
              <li><button onClick={() => onOpenConsultation('LLP Registration')} className="hover:text-white transition-colors cursor-pointer">LLP Registration</button></li>
              <li><button onClick={() => onOpenConsultation('Partnership Firm')} className="hover:text-white transition-colors cursor-pointer">Partnership Firm</button></li>
              <li><button onClick={() => onOpenConsultation('Proprietorship Registration')} className="hover:text-white transition-colors cursor-pointer">Proprietorship Registration</button></li>
              <li><button onClick={() => onOpenConsultation('Startup India Registration')} className="hover:text-white transition-colors cursor-pointer">Startup India Registration</button></li>
              <li><button onClick={() => onOpenConsultation('MSME Udyam Registration')} className="hover:text-white transition-colors cursor-pointer">MSME Udyam Registration</button></li>
              <li><button onClick={() => onOpenConsultation('GST Registration')} className="hover:text-white transition-colors cursor-pointer">GST Registration</button></li>
              <li><button onClick={() => onOpenConsultation('GEM Registration')} className="hover:text-white transition-colors cursor-pointer">GEM Registration</button></li>
            </ul>
          </div>

          {/* Column 3: Licenses & Compliance */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#027D9B] pl-2">
              Licenses & Compliance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onOpenConsultation('BIS Certification')} className="hover:text-white transition-colors cursor-pointer">BIS Certification</button></li>
              <li><button onClick={() => onOpenConsultation('FSSAI License')} className="hover:text-white transition-colors cursor-pointer">FSSAI License</button></li>
              <li><button onClick={() => onOpenConsultation('Import Export (IEC)')} className="hover:text-white transition-colors cursor-pointer">Import Export (IEC)</button></li>
              <li><button onClick={() => onOpenConsultation('DGFT License')} className="hover:text-white transition-colors cursor-pointer">DGFT License</button></li>
              <li><button onClick={() => onOpenConsultation('Pollution NOC (CTE/CTO)')} className="hover:text-white transition-colors cursor-pointer">Pollution NOC (CTE/CTO)</button></li>
              <li><button onClick={() => onOpenConsultation('PSARA License Registration')} className="hover:text-white transition-colors cursor-pointer">PSARA License</button></li>
              <li><button onClick={() => onOpenConsultation('Trademark Registration')} className="hover:text-white transition-colors cursor-pointer">Trademark Registration</button></li>
              <li><button onClick={() => onOpenConsultation('CE & ISO Certification')} className="hover:text-white transition-colors cursor-pointer">CE & ISO Certification</button></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#027D9B] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#who-we-are" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services-tabs" className="hover:text-white transition-colors">What We Do</a></li>
              <li><button onClick={() => onOpenConsultation()} className="hover:text-white transition-colors cursor-pointer">Contact Us</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Bizforgex Private Limited. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-500">
            Bizforgex is a private legal-tech platform and is not affiliated with the Ministry of Corporate Affairs or any government body.
          </p>
        </div>

      </div>
    </footer>
  );
};
