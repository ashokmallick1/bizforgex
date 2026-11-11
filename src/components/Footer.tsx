import { Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer = ({ onOpenConsultation }: FooterProps) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20">
                B
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                BIZFORGE<span className="text-blue-500">X</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bizforgex is an Indian legal tech and corporate compliance advisory firm dedicated to helping startups, MSMEs, and enterprises manage registrations, licenses, tax filings, and regulatory approvals with 100% digital ease.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>Registered Office: Bhubaneswar, Odisha, India</p>
              <p>Branches / Liaison: Noida • New Delhi • Bengaluru</p>
            </div>
          </div>

          {/* Registrations */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">Incorporate</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Private Limited Company</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">LLP Registration</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">One Person Company (OPC)</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Partnership Firm</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Section 8 / NGO Registration</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">USA / UAE Company Incorporation</button></li>
            </ul>
          </div>

          {/* Licenses & Tax */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">Licenses & IP</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">FSSAI Food License</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Trademark Registration & ™</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Import Export Code (IEC)</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">BIS & ISI Certification</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">PSARA Security License</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-blue-400 transition-colors text-left cursor-pointer">GST Registration & Filing</button></li>
            </ul>
          </div>

          {/* Direct Support & Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">Get In Touch</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="https://wa.me/918920544114"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>+91 89205 44114 (WhatsApp)</span>
              </a>

              <a href="tel:+918920544114" className="flex items-center space-x-2 hover:text-white">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+91 89205 44114</span>
              </a>

              <a href="mailto:support@bizforgex.com" className="flex items-center space-x-2 hover:text-white">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>support@bizforgex.com</span>
              </a>

              <a
                href="https://www.facebook.com/bizforzex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Facebook Community &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Bizforgex Private Limited. All Rights Reserved. Not a government portal; we are a private legal technology and compliance advisory firm.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
