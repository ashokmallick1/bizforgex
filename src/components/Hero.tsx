import { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Sparkles } from 'lucide-react';

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
    <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-indigo-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>India's Trusted Business Compliance & Legal Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empower Your Business: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
                Compliance & Licensing
              </span> <br />
              Made Easy With Us.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Launch and scale your enterprise with confidence. <strong>Bizforgex</strong> delivers end-to-end company registrations, government licenses, trademark protection, GST, FSSAI, ISO & BIS approvals—all handled by seasoned CAs, CSs, and corporate attorneys with 100% digital convenience and zero hidden costs.
            </p>

            {/* Quick Metrics / Social Proof */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-slate-200/80 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">12,500+</p>
                <p className="text-xs text-slate-500 font-medium">Businesses Incorporated</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">99.8%</p>
                <p className="text-xs text-slate-500 font-medium">Approval Success Rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.9 / 5</p>
                <p className="text-xs text-slate-500 font-medium">Customer Rating</p>
              </div>
            </div>

            {/* Highlights checkmarks */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-700 font-medium">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Govt Recognized & Certified</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dedicated Relationship Manager</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Express Turnaround Options</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-conversion Quick Inquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200 p-6 sm:p-8 relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5" />
                <span>Save Up To 50% Today</span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Get Instant Consultation</h3>
                <p className="text-xs text-slate-500 mt-1">Talk to our senior corporate compliance specialist within 15 minutes.</p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select Required Service</label>
                  <select
                    value={quickEntity}
                    onChange={(e) => setQuickEntity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50"
                  >
                    <option value="pvt-ltd">Private Limited Company Registration (₹1,499*)</option>
                    <option value="llp">LLP Registration (₹2,499*)</option>
                    <option value="opc">One Person Company (OPC) (₹1,999*)</option>
                    <option value="fssai">FSSAI Food License / Registration (₹999*)</option>
                    <option value="trademark">Trademark Registration & Search (₹1,499*)</option>
                    <option value="gst-reg">GST Registration & Filing (₹799*)</option>
                    <option value="msme">MSME / Udyam Certificate (₹499*)</option>
                    <option value="iec">Import Export Code (IEC) (₹1,499*)</option>
                    <option value="bis-certification">BIS / ISI Certification</option>
                    <option value="psara-license">PSARA License for Security Agencies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Phone Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-sm font-semibold text-slate-500">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile"
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
                <span>Need immediate answer?</span>
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
      </div>
    </section>
  );
};
