import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface CostEstimatorProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const CostEstimator = ({ onOpenConsultation }: CostEstimatorProps) => {
  const [entityType, setEntityType] = useState<'pvt' | 'llp' | 'opc' | 'fssai' | 'gst' | 'tm'>('pvt');
  const [state, setState] = useState('Odisha');
  const [directors, setDirectors] = useState(2);
  const [includeGST, setIncludeGST] = useState(true);
  const [includeTrademark, setIncludeTrademark] = useState(false);

  const calculateEstimate = () => {
    let baseGovt = 0;
    let baseProf = 1499;

    if (entityType === 'pvt') {
      baseGovt = 1000 + (directors * 500); // DSC + SPICe+ Stamp
      baseProf = 1499;
    } else if (entityType === 'llp') {
      baseGovt = 1200;
      baseProf = 2499;
    } else if (entityType === 'opc') {
      baseGovt = 1000;
      baseProf = 1499;
    } else if (entityType === 'fssai') {
      baseGovt = 100;
      baseProf = 999;
    } else if (entityType === 'gst') {
      baseGovt = 0;
      baseProf = 799;
    } else if (entityType === 'tm') {
      baseGovt = 4500; // Official govt TM fee for MSME/Individuals
      baseProf = 1499;
    }

    if (includeGST && entityType !== 'gst') {
      baseProf += 499;
    }

    if (includeTrademark && entityType !== 'tm') {
      baseGovt += 4500;
      baseProf += 999;
    }

    return {
      govtFee: baseGovt,
      profFee: baseProf,
      total: baseGovt + baseProf
    };
  };

  const est = calculateEstimate();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#027D9B] tracking-wider uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            100% Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C37] mt-3 tracking-tight">
            Instant Government Fee & Cost Calculator
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Know exactly what you pay before you start. Clear breakdown between official government statutory fees and professional charges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {/* Configurator Left */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Legal Structure / Service
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'pvt', label: 'Private Limited' },
                  { id: 'llp', label: 'LLP Partnership' },
                  { id: 'opc', label: 'One Person (OPC)' },
                  { id: 'fssai', label: 'FSSAI Food License' },
                  { id: 'gst', label: 'GST Registration' },
                  { id: 'tm', label: 'Trademark (™)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEntityType(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                      entityType === item.id
                        ? 'bg-[#027D9B] text-white border-[#027D9B] shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. State of Incorporation
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:ring-2 focus:ring-[#027D9B] outline-none"
                >
                  <option value="Odisha">Odisha</option>
                  <option value="Delhi">Delhi / NCR</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Telangana">Telangana</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Other">Other State</option>
                </select>
              </div>

              {(entityType === 'pvt' || entityType === 'llp') && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    3. Number of Directors / Partners
                  </label>
                  <div className="flex items-center space-x-2">
                    {[2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setDirectors(num)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                          directors === num
                            ? 'bg-[#0A1C37] text-white border-[#0A1C37]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {num} Directors
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Optional Bundles */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                4. Optional Add-ons & Bundles
              </label>
              <div className="space-y-2">
                {entityType !== 'gst' && (
                  <label className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeGST}
                      onChange={(e) => setIncludeGST(e.target.checked)}
                      className="w-4 h-4 text-[#027D9B] rounded focus:ring-[#027D9B]"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900">Include GSTIN Registration & Setup (+₹499)</span>
                      <p className="text-slate-500 text-[11px]">Get your business GST-ready immediately after certificate issuance</p>
                    </div>
                  </label>
                )}

                {entityType !== 'tm' && (
                  <label className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeTrademark}
                      onChange={(e) => setIncludeTrademark(e.target.checked)}
                      className="w-4 h-4 text-[#027D9B] rounded focus:ring-[#027D9B]"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900">Add Brand Trademark (™) Search & Filing (+₹999 prof fee)</span>
                      <p className="text-slate-500 text-[11px]">Protects your brand name from day 1 across India</p>
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Estimate Display Right */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0A1C37] to-[#0D2447] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#027D9B] bg-sky-950 px-2 py-0.5 rounded">
                    Itemized Quote
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">Cost Breakdown</h4>
                </div>
                <Calculator className="w-6 h-6 text-[#027D9B]" />
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Govt. Statutory Fees & Stamp Duty:</span>
                  <span className="font-semibold text-white">₹{est.govtFee.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Bizforgex Professional Charges:</span>
                  <span className="font-semibold text-white">₹{est.profFee.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>DSC & Director KYC:</span>
                  <span className="font-semibold text-emerald-400">Included Free</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>PAN, TAN & Bank Resolution:</span>
                  <span className="font-semibold text-emerald-400">Included Free</span>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-200">Estimated Total:</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white">₹{est.total.toLocaleString()}</span>
                    <span className="block text-[10px] text-slate-400">*Govt fee subject to state stamp act</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => onOpenConsultation(`Package: ${entityType.toUpperCase()} - Est ₹${est.total}`)}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#027D9B] hover:bg-sky-600 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#027D9B]/30 cursor-pointer"
              >
                <span>Lock This Price & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Hidden Costs • 100% Digital Execution</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
