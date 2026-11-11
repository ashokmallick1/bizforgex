import { WHO_WE_ARE_CONTENT } from '../data/servicesData';
import { ShieldCheck, Users, Headphones } from 'lucide-react';

export const WhyUs = () => {
  const icons = [ShieldCheck, Users, Headphones];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WHO WE ARE Section matching Lincenzo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full">
              {WHO_WE_ARE_CONTENT.heading}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {WHO_WE_ARE_CONTENT.title}
            </h2>
            <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
              {WHO_WE_ARE_CONTENT.subtitle}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {WHO_WE_ARE_CONTENT.description}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {WHO_WE_ARE_CONTENT.features.map((f, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Banner matching Lincenzo */}
        <div id="testimonials" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
              Features of Our Legal Service
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Updated Testimonials From Our Customers</h3>
            <p className="text-slate-600 text-sm mt-1">
              Trusted by thousands of businesses across India for seamless compliance, registrations, and advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                "Bizforgex helped us register our Private Limited company in less than 8 days. Everything was done online, and our designated manager was available on WhatsApp throughout."
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Sunil Patra</h4>
                  <p className="text-xs text-slate-500">Director, FinEdge Technologies</p>
                </div>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Bhubaneswar</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                "We applied for both FSSAI food license and trademark filing. The speed of execution and transparent pricing saved us both time and money."
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Deepak Agrawal</h4>
                  <p className="text-xs text-slate-500">Co-founder, FreshDaily Foods</p>
                </div>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Noida</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                "Our IEC code and MSME certificate were issued on the same day. Highly professional compliance support with zero hidden charges."
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Meera Senapati</h4>
                  <p className="text-xs text-slate-500">Managing Partner, SilkCraft Global</p>
                </div>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Cuttack</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
