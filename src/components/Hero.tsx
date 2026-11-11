import { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Sparkles, Building2, Award, Clock } from 'lucide-react';
import { STATS } from '../data/servicesData';

interface HeroProps {
  onOpenConsultation: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Hero = ({ onOpenConsultation, onSelectService }: HeroProps) => {
  const [quickEntity, setQuickEntity] = useState('pvt-ltd');
  const [mobileNum, setMobileNum] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNum) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMobileNum('');
        onSelectService(quickEntity);
        onOpenConsultation();
      }, 1000);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-indigo-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          
          {/* Left Column: Heading, Subtitle & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Premium Business Management & Compliance Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empower Your Business: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
                Compliance & Management
              </span> <br />
              Made Easy With Us.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Launch and grow your business with confidence. <strong>Bizforgex</strong> offers end-to-end business registration, licensing, tax compliance, trademark registration, GST, FSSAI, ISO certifications, and government approvals—all handled by experienced professionals with transparent pricing and 100% online support.
            </p>

            {/* Checklist points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 font-medium pt-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Digital & Paperless Filing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Dedicated Relationship Manager</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Transparent Government Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Hidden Consultation Costs</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-conversion Consultation Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200 p-6 sm:p-8 relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs uppercase px-3.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5" />
                <span>Save 50% Today</span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Get Instant Consultation</h3>
                <p className="text-xs text-slate-500 mt-1">Avail consultation from our seasoned legal consultants for expert support.</p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select Required Service</label>
                  <select
                    value={quickEntity}
                    onChange={(e) => setQuickEntity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50"
                  >
                    <option value="pvt-ltd">Company Registration in India (₹1,499*)</option>
                    <option value="llp">LLP Registration Online (₹2,499*)</option>
                    <option value="opc">One Person Company Registration (₹1,499*)</option>
                    <option value="partnership">Partnership Firm Registration (₹1,299*)</option>
                    <option value="fssai">FSSAI Food License / Registration (₹999*)</option>
                    <option value="msme">MSME / Udyam Certificate (₹499*)</option>
                    <option value="iec">IEC Registration (Import Export Code) (₹1,499*)</option>
                    <option value="gst-reg">GST Registration & Filing (₹799*)</option>
                    <option value="trademark">Trademark Registration & ™ (₹1,499*)</option>
                    <option value="psara">PSARA License for Security Agencies</option>
                    <option value="ce-iso">CE & ISO Certification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Mobile Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-sm font-semibold text-slate-500">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={mobileNum}
                      onChange={(e) => setMobileNum(e.target.value)}
                      className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>We respect your privacy. No spam guaranteed.</span>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {submitted ? (
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Request Received! Calling you...</span>
                    </span>
                  ) : (
                    <>
                      <span>Start Application Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Need immediate support?</span>
                <a
                  href="https://wa.me/918920544114?text=Hi%20Bizforgex%2C%20I%20want%20to%20register%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
                >
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Highlighted Stat Cards Bar (Matches Lincenzo Stats) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-200">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                {i === 0 && <Award className="w-6 h-6" />}
                {i === 1 && <Building2 className="w-6 h-6" />}
                {i === 2 && <ShieldCheck className="w-6 h-6" />}
                {i === 3 && <Clock className="w-6 h-6" />}
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 tracking-tight">
                  {stat.value}<span className="text-blue-600 text-lg">{stat.suffix}</span>
                </p>
                <p className="text-xs font-semibold text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
