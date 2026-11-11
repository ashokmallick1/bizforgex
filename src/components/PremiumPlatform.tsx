import { BarChart2, ShieldCheck, Users, FileText, Settings, Award, Globe } from 'lucide-react';

interface PremiumPlatformProps {
  onOpenConsultation: () => void;
}

export const PremiumPlatform = ({ onOpenConsultation }: PremiumPlatformProps) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Heading, Mission, Overview) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-bold text-[#027D9B] tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Overview
            </span>

            <h2 className="text-3xl font-black text-[#0A1C37] tracking-tight leading-tight">
              Premium Business Management Platform
            </h2>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                <strong>Bizforgex</strong> is a leading business registration and compliance service provider dedicated to helping entrepreneurs and businesses across India. We offer end-to-end solutions for company registration, licensing, certifications, tax compliance, and government approvals through a simple, transparent, and fully digital process. With expert guidance and customer-focused support, we help businesses stay compliant and grow with confidence.
              </p>
              <p>
                From Company Registration, Trademark Registration, GST, FSSAI, ISO Certification, Import Export Code (IEC), Startup India Registration, PSARA License, and many other business compliance services, our experienced professionals provide end-to-end support with accuracy, transparency, and timely execution.
              </p>
              <p>
                Choose Bizforgex as your trusted licensing and compliance partner—and focus on growing your business while we take care of the legal formalities.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#027D9B] hover:bg-[#0A1C37] transition-all shadow-sm cursor-pointer"
            >
              Learn more
            </button>
          </div>

          {/* Middle & Right 8 Feature Boxes (Exact Elementor 2x4 Matrix) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Startup Registration */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <BarChart2 className="w-4 h-4 text-[#027D9B]" />
                <span>Startup Registration</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Bizforgex helps you register your business from start to finish while providing complete compliance support.</strong>
              </p>
            </div>

            {/* Box 2: Tax and Auditing */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <FileText className="w-4 h-4 text-[#027D9B]" />
                <span>Tax and Auditing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Get your business registration and compliance done hassle-free with Bizforgex.</strong>
              </p>
            </div>

            {/* Box 3: Environmental Consultancy */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <Globe className="w-4 h-4 text-[#027D9B]" />
                <span>Environmental Consultancy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Simplify your business compliance and achieve seamless legal success with Bizforgex.</strong>
              </p>
            </div>

            {/* Box 4: Advisory and Consultancy */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <Users className="w-4 h-4 text-[#027D9B]" />
                <span>Advisory and Consultancy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>At Bizforgex, our experts are committed to delivering reliable business registration, licensing, compliance, and legal advisory services tailored to your business needs.</strong>
              </p>
            </div>

            {/* Box 5: Regulatory (BIS, CDSCO, ISO) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#027D9B]" />
                <span>Regulatory (BIS, CDSCO, ISO)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>At Bizforgex, our experts simplify business registrations, licenses, GST, trademarks, ISO certifications, and regulatory compliance with complete end-to-end support.</strong>
              </p>
            </div>

            {/* Box 6: Licensing */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <Award className="w-4 h-4 text-[#027D9B]" />
                <span>Licensing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>India has various legal and regulatory requirements that every business must comply with. Bizforgex simplifies the process by helping you obtain essential registrations and licenses such as PSARA, FSSAI, GST, Trademark, ISO, IEC, and more.</strong>
              </p>
            </div>

            {/* Box 7: On Demand CA/CS Services */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <Settings className="w-4 h-4 text-[#027D9B]" />
                <span>On Demand CA/CS Services</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>At Bizforgex, our experts simplify business registrations, licenses, GST, trademarks, ISO certifications, and regulatory compliance with complete end-to-end support.</strong>
              </p>
            </div>

            {/* Box 8: Free Business Templates */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#0A1C37] font-bold text-sm">
                <FileText className="w-4 h-4 text-[#027D9B]" />
                <span>Free Business Templates</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Managing business registrations and legal compliance can be complex and time-consuming. Bizforgex offers 100+ registration, licensing, and certification services to help you start, grow, and manage your business with ease.</strong>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
