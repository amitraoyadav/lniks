import React, { useState } from 'react';
import { PRODUCTS_DATA, BRAND_CONFIG } from '../data/loanData';
import { LoanType } from '../types';
import {
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
  FileText,
  BadgePercent,
  Calendar,
  Layers,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/loanCalculators';
import { AchIconMark } from './AchLogo';

interface ProductsSectionProps {
  onOpenApplyModal: (loanType: LoanType, variantTitle?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenApplyModal }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('home-loan');
  const [docTab, setDocTab] = useState<'salaried' | 'selfEmployed'>('salaried');

  const activeProduct =
    PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-50 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2F483E] uppercase tracking-wider mb-2">
            <AchIconMark className="w-4 h-5 shrink-0" color="#2F483E" />
            <span>Core Loan Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Tailored Financing for Home Buyers & Property Owners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Group ACH specializes in the two highest-impact property lending categories in India: <strong className="text-slate-900 font-semibold">Home Loans</strong> and <strong className="text-slate-900 font-semibold">Loan Against Property (LAP)</strong>. Explore customized variants, interest rates, and eligibility benchmarks.
          </p>
        </div>

        {/* Product Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/80 shadow-inner">
            <button
              onClick={() => setSelectedProductId('home-loan')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                selectedProductId === 'home-loan'
                  ? 'bg-white text-slate-900 shadow-md shadow-slate-900/10'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-4 h-4 text-sky-600" />
              <span>Home Loans</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-mono font-medium">
                From 8.35%*
              </span>
            </button>

            <button
              onClick={() => setSelectedProductId('loan-against-property')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                selectedProductId === 'loan-against-property'
                  ? 'bg-white text-slate-900 shadow-md shadow-slate-900/10'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Loan Against Property (LAP)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-medium">
                From 9.25%*
              </span>
            </button>
          </div>
        </div>

        {/* Active Product Detailed Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-900/5 mb-12">
          
          {/* Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200 items-start">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100">
                {activeProduct.type === 'home_loan' ? <Home className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                <span>{activeProduct.type === 'home_loan' ? 'Residential Finance Category' : 'Mortgage & Liquidity Category'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeProduct.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <BadgePercent className="w-4 h-4 text-sky-600" /> Starting Interest Rate:
                </span>
                <span className="font-extrabold text-slate-900 font-mono text-sm">
                  {activeProduct.interestRateStarting}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-600" /> Max Loan Tenure:
                </span>
                <span className="font-extrabold text-slate-900 font-mono text-sm">
                  Up to {activeProduct.maxTenureYears} Years
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-600" /> Loan-to-Value (LTV):
                </span>
                <span className="font-extrabold text-emerald-700 font-mono text-xs">
                  {activeProduct.maxLtv}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenApplyModal(activeProduct.type)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply for {activeProduct.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Variants Breakdown */}
          <div className="py-8 border-b border-slate-200">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span>Specific Loan Schemes & Variants We Structure</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeProduct.variants.map((v, i) => (
                <div
                  key={v.title}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200/80 hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-mono font-semibold text-sky-700 mb-1">
                      0{i + 1}. Variant
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 mb-2">{v.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{v.description}</p>
                  </div>
                  <button
                    onClick={() => onOpenApplyModal(activeProduct.type, v.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors pt-2 border-t border-slate-200/60"
                  >
                    <span>Check Eligibility for this Variant</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits and Eligibility Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-b border-slate-200">
            {/* Key Benefits */}
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Borrower Benefits & Terms</span>
              </h4>
              <ul className="space-y-3">
                {activeProduct.keyBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                <span>Eligibility Benchmarks</span>
              </h4>
              <ul className="space-y-3">
                {activeProduct.eligibility.map((el) => (
                  <li key={el} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900">
                <strong className="font-semibold">CIBIL Score Note:</strong> Low credit score or minor historical delay? Group ACH works with specialized partner NBFCs that evaluate cash flow and collateral strength.
              </div>
            </div>
          </div>

          {/* Documents Required Checklist (Interactive Salaried vs Self-Employed) */}
          <div className="pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>Doorstep Documentation Checklist</span>
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Our advisor will personally collect and verify these documents at your convenience.
                </p>
              </div>

              {/* Salaried vs Self-Employed toggle */}
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setDocTab('salaried')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    docTab === 'salaried'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Salaried Individual
                </button>
                <button
                  onClick={() => setDocTab('selfEmployed')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    docTab === 'selfEmployed'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Self-Employed / Business
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeProduct.documentsRequired[docTab].map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                >
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            {/* Direct Action Bottom Callout */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <div>
                <h5 className="text-sm font-bold">Ready to apply for {activeProduct.title}?</h5>
                <p className="text-xs text-slate-300 mt-0.5">
                  Have questions about property title or legal verification? Talk to an advisor.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={buildWhatsAppLink(
                    `Hi Group ACH, I want to discuss documentation & eligibility for ${activeProduct.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-950" />
                  <span>Secured Line Chat (+91 94825 37337)</span>
                </a>
                <button
                  onClick={() => onOpenApplyModal(activeProduct.type)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
