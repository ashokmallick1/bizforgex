import { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import type { ServiceItem } from '../data/servicesData';
import { ArrowRight, BarChart2 } from 'lucide-react';

interface ServicesTabsProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesTabs = ({ onSelectServiceModal, onOpenConsultation }: ServicesTabsProps) => {
  const [activeTab, setActiveTab] = useState<'business' | 'gov-reg' | 'gov-lic'>('business');

  const businessCards = [
    {
      id: 'pvt-ltd',
      title: 'Company Registration',
      heading: 'Company Registration in India Save 50% Today on Professional Services Avail consultation from our seasoned consultants for expert support..',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
      link: 'company-registration'
    },
    {
      id: 'llp',
      title: 'LLP Registration',
      heading: 'LLP Registration Online – Register a Limited Liability Partnership in Just 7 Days Start your LLP registration with Bizforgex through a simple, fully online process backed by expert assistance and transparent pricing.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
      link: 'llp-registrations'
    },
    {
      id: 'opc',
      title: 'One Person Company Registration',
      heading: 'Rated 4.8/5 by 42,800+ Entrepreneurs From ₹1,499 • 5-7 Days One Person CompanyRegistration Ready to start your business journey solo..',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
      link: 'opc-registration'
    },
    {
      id: 'partnership',
      title: 'Partnership Firm Registration',
      heading: 'Partnership Firm Registration in India Grab 50% Off on Bizforgex® Expert Services Are you seeking partnership firm registration in India?',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80',
      link: 'partnership-firm'
    }
  ];

  const govRegCards = [
    {
      id: 'msme',
      title: 'MSME Registration',
      heading: 'MSME Registration - Get Your Udyam Certificate Easily Looking to grow your business and access government schemes and subsidies?..',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
      link: 'msme-registration'
    },
    {
      id: 'iec',
      title: 'IEC Registration',
      heading: 'IEC Registration Free Consultation for Import Export Code License Are you looking to scale up your business outside India? Manage foreign trade easily..',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80',
      link: 'iec-registration'
    },
    {
      id: 'fssai',
      title: 'Fassai Registration',
      heading: 'FSSAI Registration – Application Filing in 1 Hour Losing customers because your FSSAI registration is still pending? Bizforgex makes it quick and hassle-free.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80',
      link: 'fssai-state-licence'
    },
    {
      id: 'epf',
      title: 'EPF Registration',
      heading: 'EPF Registration Process Online for Employer Get Approved with Zero Hassle Facing delays in EPF registration and afraid of making mistakes? Let experts ease the process..',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
      link: 'epf-registration'
    }
  ];

  const govLicCards = [
    {
      id: 'shop-act',
      title: 'Shop & Establishment License',
      heading: 'Shop and Establishment License The Shops and Establishment act makes sure that both organized and unorganized sectors are protected and legally authorized..',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
      link: 'shop-license'
    },
    {
      id: 'psara',
      title: 'PSARA License',
      heading: 'PSARA License in India Limited-Time Deal: Save Up to 50% on Days Worried about the challenges in PSARA License registration in India? We handle controlling authority approvals..',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=400&q=80',
      link: 'psara-license'
    },
    {
      id: 'ce-iso',
      title: 'CE Certification',
      heading: 'Apply For CE Certification in India Are you experiencing delays in getting your CE certification online? Let Bizforgex experts ease the process..',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
      link: 'ce-certification'
    },
    {
      id: 'trade-license',
      title: 'Trade License',
      heading: 'Trade License in India - Apply in 2 Minutes Need a trade license in India, but are unaware of the trade license online process? Apply with municipal authorities now..',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80',
      link: 'trade-license'
    }
  ];

  const currentCards = activeTab === 'business' ? businessCards : activeTab === 'gov-reg' ? govRegCards : govLicCards;

  return (
    <section id="services-tabs" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Lincenzo */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C37] tracking-tight">
            Legal Help Across Wide Range of Services
          </h2>
          <div className="w-20 h-1 bg-[#027D9B] mx-auto my-4 rounded-full"></div>
          <h3 className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Bizforgex focuses on helping entrepreneurs, startups, and businesses by providing services such as Company Registration, Government Registrations, Business Licenses, Tax Compliance, Trademark Registration, ISO Certification, and many more.
          </h3>
        </div>

        {/* Tab Buttons (Elementor Nested Tabs replica - horizontally scrollable on mobile) */}
        <div className="flex justify-center mb-10 overflow-x-auto px-2 scrollbar-none">
          <div className="inline-flex p-1 sm:p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner max-w-full">
            <button
              onClick={() => setActiveTab('business')}
              className={`px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-[#027D9B] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Business Registration
            </button>
            <button
              onClick={() => setActiveTab('gov-reg')}
              className={`px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'gov-reg'
                  ? 'bg-[#027D9B] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Government Registration
            </button>
            <button
              onClick={() => setActiveTab('gov-lic')}
              className={`px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'gov-lic'
                  ? 'bg-[#027D9B] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Government Licenses
            </button>
          </div>
        </div>

        {/* Cards Grid (4 columns, exact elementor cards layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCards.map((card) => {
            const fullService = SERVICES.find((s) => s.id === card.id);
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Image */}
                  <div className="h-44 overflow-hidden relative bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    {/* Icon list header */}
                    <div className="flex items-center space-x-2 text-[#027D9B] font-bold text-xs uppercase tracking-wide mb-2">
                      <BarChart2 className="w-4 h-4 text-[#027D9B]" />
                      <span>{card.title}</span>
                    </div>

                    {/* Heading content */}
                    <p className="text-xs text-slate-700 leading-relaxed line-clamp-4">
                      {card.heading}
                    </p>
                  </div>
                </div>

                {/* Button Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      if (fullService) {
                        onSelectServiceModal(fullService);
                      } else {
                        onOpenConsultation(card.title);
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-[#027D9B] bg-slate-50 hover:bg-[#027D9B] hover:text-white border border-slate-200 hover:border-[#027D9B] transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Click here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
