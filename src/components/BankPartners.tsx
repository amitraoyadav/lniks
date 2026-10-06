import React, { useState } from 'react';
import { PARTNER_BANKS } from '../data/loanData';
import { Landmark, ArrowUpRight, Check, ShieldCheck, Percent } from 'lucide-react';
import { AchIconMark } from './AchLogo';

interface BankPartnersProps {
  onSelectBankQuote: (bankName: string) => void;
}

export const BankPartners: React.FC<BankPartnersProps> = ({ onSelectBankQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Public Bank', 'Private Bank', 'Housing Finance Co', 'NBFC'];

  const filteredBanks =
    activeCategory === 'All'
      ? PARTNER_BANKS
      : PARTNER_BANKS.filter((b) => b.category === activeCategory);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F483E] tracking-wide uppercase mb-2">
            <AchIconMark className="w-4 h-5 shrink-0" color="#2F483E" />
            <span>Institutional Lending Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Associated with 70+ Top Banks & Housing Finance Institutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            As an independent loan connector, Group ACH evaluates your profile against the underwriting criteria of India’s premier financial institutions to secure the lowest interest rates, highest LTV, and minimal processing charges.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-xl mb-8 border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat === 'All' ? 'All 70+ Lenders' : cat}
            </button>
          ))}
        </div>

        {/* Bank Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredBanks.map((bank) => (
            <div
              key={bank.name}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-sky-300 p-5 transition-all hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {bank.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {bank.category} · {bank.maxTenure}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                    <Landmark className="w-4 h-4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-white rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Home Loan</span>
                    <span className="font-bold text-slate-900 font-mono text-sm">
                      {bank.homeLoanRate}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">LAP Rate</span>
                    <span className="font-bold text-slate-900 font-mono text-sm">
                      {bank.lapRate}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                  <span className="font-semibold text-slate-700">Specialty: </span>
                  {bank.popularFor}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Pre-approved available
                </span>
                <button
                  onClick={() => onSelectBankQuote(bank.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors"
                >
                  <span>Apply with {bank.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Partner Note */}
        <div className="mt-8 p-4 rounded-xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-600 text-white shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="font-semibold text-slate-900">Need specific bank negotiation?</strong> Group ACH advisors leverage direct channel relationships to negotiate rate cuts and processing waivers on your behalf.
            </div>
          </div>
          <button
            onClick={() => onSelectBankQuote('Best Available Bank Offer')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
          >
            Compare All 70+ Rates
          </button>
        </div>

      </div>
    </section>
  );
};
