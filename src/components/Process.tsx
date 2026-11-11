import React from 'react';
import { ClipboardList, CreditCard, UserCheck, Award, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Submit Details Online',
      desc: 'Fill out our simplified 2-minute online questionnaire and upload required KYC documents through our secure portal.',
      icon: ClipboardList,
      color: 'blue'
    },
    {
      step: '02',
      title: 'Expert Review & Verification',
      desc: 'Our dedicated Company Secretary (CS) and Chartered Accountant (CA) review your paperwork to guarantee zero rejection.',
      icon: UserCheck,
      color: 'indigo'
    },
    {
      step: '03',
      title: 'Transparent Payment',
      desc: 'Clear, milestone-based payments with transparent itemization of government statutory fees and professional charges.',
      icon: CreditCard,
      color: 'amber'
    },
    {
      step: '04',
      title: 'Government Approval & Delivery',
      desc: 'Receive your Certificate of Incorporation, License number, PAN, TAN, and compliance toolkit right in your inbox and WhatsApp.',
      icon: Award,
      color: 'emerald'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Effortless 4-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How Bizforgex Works For You
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            No running around government offices or dealing with complex legal jargon. We turn complicated regulatory procedures into a smooth, 100% digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
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
                    <span className="text-3xl font-black text-slate-200">{item.step}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-600">
                  <span>Step {item.step} Complete</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Ready to register your company today?</h3>
            <p className="text-blue-200 text-sm">Save up to 50% on professional fees with our limited-time launch packages.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-50 transition-all shadow-md cursor-pointer flex items-center space-x-2"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/918920544114?text=Hi%20Bizforgex%2C%20I%20want%20to%20know%20the%20registration%20procedure."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md flex items-center space-x-2"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
