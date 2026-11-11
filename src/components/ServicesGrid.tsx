import { useState } from 'react';
import { SERVICES, CATEGORIES } from '../data/servicesData';
import type { ServiceItem } from '../data/servicesData';
import { ArrowRight, Check, Clock, HelpCircle } from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesGrid = ({ onSelectServiceModal, onOpenConsultation }: ServicesGridProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Lincenzo */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Legal Help Across Wide Range of Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Our Business Registration & Compliance Services
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Bizforgex focuses on helping entrepreneurs, startups, and businesses by providing services such as Company Registration, Government Registrations, Business Licenses, Tax Compliance, Trademark Registration, ISO Certification, and many more.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search (e.g. FSSAI, GST, PSARA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                service.popular ? 'border-blue-500 ring-1 ring-blue-500/30' : 'border-slate-200 shadow-sm'
              }`}
            >
              {service.badge && (
                <div className="bg-amber-500/10 border-b border-amber-200 text-amber-900 text-xs font-semibold px-6 py-2 flex items-center justify-between">
                  <span>{service.badge}</span>
                  {service.popular && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{service.turnaroundTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-600 font-semibold mt-1">
                    {service.tagline}
                  </p>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key features bullets */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Inclusions:</p>
                  {service.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">From</span>
                  <span className="text-lg font-extrabold text-slate-900">{service.startingPrice}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onSelectServiceModal(service)}
                    className="p-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  >
                    Checklist
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center space-x-1 cursor-pointer shadow-sm"
                  >
                    <span>Click Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">No specific service found for "{searchQuery}"</h4>
            <p className="text-slate-500 text-sm mt-1">We handle custom registrations and state clearances across all sectors.</p>
            <button
              onClick={onOpenConsultation}
              className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
            >
              Consult Compliance Expert
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
