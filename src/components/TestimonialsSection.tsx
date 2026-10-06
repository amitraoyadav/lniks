import React from 'react';
import { TESTIMONIALS } from '../data/loanData';
import { Quote, CheckCircle2, TrendingUp, Sparkles, Building, Home } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstrated Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Real Client Approvals & Measurable Savings
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            See how home buyers and business owners secured lower rates and faster sanctions through Group ACH.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-950 text-sky-300 border border-sky-800/60 flex items-center gap-1.5">
                    {item.loanType.includes('Home') ? (
                      <Home className="w-3 h-3 text-sky-400" />
                    ) : (
                      <Building className="w-3 h-3 text-sky-400" />
                    )}
                    <span>{item.loanType}</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    {item.amount}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.role}</p>
                    <p className="text-[10px] text-slate-500">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-emerald-400 block">
                      {item.savings}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Loan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
