import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'How long does it take to incorporate a Private Limited Company?',
      a: 'With Bizforgex, the process typically takes 7 to 10 working days, subject to MCA (Ministry of Corporate Affairs) portal processing and name availability approval. We file RUN / SPICe+ forms within 24-48 hours once your KYC documents are verified.'
    },
    {
      q: 'Do I need to visit any government office in person?',
      a: 'No! The entire procedure is 100% digital. You submit scanned copies of identity documents, address proofs, and photos through our secure system. Digital Signature Certificates (DSC) are issued remotely.'
    },
    {
      q: 'What is the difference between government fees and professional charges?',
      a: 'Government fees are statutory charges mandated by the Ministry of Corporate Affairs (MCA), Food Safety Authority (FSSAI), or State Governments (stamp duties, PAN/TAN generation). Professional charges cover our Chartered Accountants, Company Secretaries, document drafting, and filing support.'
    },
    {
      q: 'Can Bizforgex handle our annual tax returns and compliance after registration?',
      a: 'Yes! We provide comprehensive post-incorporation subscriptions covering monthly GST return filing (GSTR-1, GSTR-3B), annual ROC filings (AOC-4, MGT-7), Director KYC, Income Tax Returns, and statutory accounting advisory.'
    },
    {
      q: 'Can foreigners or NRIs register a company in India through Bizforgex?',
      a: 'Yes, NRIs and foreign citizens can be directors and shareholders. At least one director must be a resident of India. Foreign documents require notarization and apostille/consular attestation, which our international team assists with.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Everything you need to know about setting up and running your business compliant in India.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between text-slate-900 font-bold text-sm sm:text-base cursor-pointer"
              >
                <span>{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {openIdx === idx && (
                <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
