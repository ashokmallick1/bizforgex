import { ClipboardList, CreditCard, UserCheck, Award, ArrowRight } from 'lucide-react';
import { WORKING_PROCESS_STEPS } from '../data/servicesData';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process = ({ onOpenConsultation }: ProcessProps) => {
  const icons = [ClipboardList, CreditCard, UserCheck, Award];

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Our Working Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Simple, Transparent & Fully Digital
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            From application submission to final government license grant, experience hassle-free legal compliance with 100% online tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKING_PROCESS_STEPS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300">0{item.step}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-600">
                  <span>Step {item.step} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Launch your business in India today</h3>
            <p className="text-blue-200 text-sm">Save 50% on professional fees with our fast-track corporate desk.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-50 transition-all shadow-md cursor-pointer flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/918920544114?text=Hi%20Bizforgex%2C%20I%20want%20to%20register%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md flex items-center space-x-2"
            >
              <span>Schedule A Call &gt;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
