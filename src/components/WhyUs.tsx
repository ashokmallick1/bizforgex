import { WHY_US_POINTS, TESTIMONIALS } from '../data/servicesData';
import { ShieldCheck, Clock, Users, BadgePercent, Star } from 'lucide-react';

export const WhyUs = () => {
  const icons = [ShieldCheck, BadgePercent, Users, Clock];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Bizforgex Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            The Bizforgex Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Why Over 12,000+ Founders Trust Bizforgex
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            We blend cutting-edge technology with qualified legal minds to take the headache out of regulatory compliances.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {WHY_US_POINTS.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900">What Our Clients Say</h3>
            <p className="text-slate-500 text-sm mt-1">Real feedback from founders and business owners across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.designation}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {t.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
