import React, { useState } from 'react';
import {
  Briefcase,
  User,
  Calculator,
  Percent,
  CheckCircle2,
  Clock,
  ArrowRight,
  Home,
  ChevronDown,
  Building2,
  ShieldCheck,
  TrendingDown,
  Phone,
  MessageSquare,
  FileText,
  BadgeAlert,
} from 'lucide-react';
import { BRAND_CONFIG, PARTNER_BANKS } from '../data/loanData';
import { buildWhatsAppLink, calculateEmi, formatCurrencyINR } from '../utils/loanCalculators';

// ==========================================
// 1. BUSINESS LOAN PAGE (/business-loan)
// ==========================================
interface BusinessLoanPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const BusinessLoanPage: React.FC<BusinessLoanPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the difference between an unsecured Business Loan and a Loan Against Property for business?',
      a: 'Unsecured business loans do not require collateral but typically carry higher interest rates (usually 14% to 18%) with shorter tenures (1 to 3 years). Loan Against Property (LAP) allows you to pledge residential or commercial property to access substantial capital at significantly lower rates (benchmark starting 9.25% onwards) with tenures up to 15 to 20 years, dramatically reducing monthly cash outflow.',
    },
    {
      q: 'What are the basic eligibility criteria for business loans in Bangalore?',
      a: 'Eligible entities include Proprietorships, Partnerships, LLPs, and Private Limited Companies with minimum 2–3 years business vintage, verified GST filings, healthy average bank balances, and a clean repayment track record with CIBIL score of 675+.',
    },
    {
      q: 'Can MSMEs in Peenya or electronic manufacturing clusters get doorstep consultation?',
      a: 'Yes. Group ACH advisors provide doorstep document pickup and consultation across Peenya Industrial Estate, Bommasandra, Electronic City, Whitefield, and all industrial corridors in Bangalore.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Business Loan Bangalore</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>MSME &amp; Corporate Working Capital Advisory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Business Loan &amp; Commercial Mortgage in Bangalore
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expand operations, fund inventory, or refinance high-cost debt. Compare collateral-free business loans and secured commercial mortgage options across top institutional lenders with Group ACH.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h2 className="text-xl font-bold font-serif text-slate-900">Commercial Property Loan (LAP)</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pledge commercial premises, office units, or residential assets to secure working capital from ₹25 Lakhs up to ₹25+ Crores at lower interest rates (starting ~9.25% p.a.).
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Extended tenure up to 15–20 years</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Drop-line flexi overdraft facility available</span>
              </li>
            </ul>
            <button
              onClick={() => onOpenApplyModal('loan_against_property', 'Business LAP Consultation')}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#85673E] text-white text-xs font-bold transition-colors"
            >
              Explore Property Loan for Business
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h2 className="text-xl font-bold font-serif text-slate-900">Unsecured Business Financing</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed for short-term working capital needs, invoice financing, or sudden operational demands without pledging collateral.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Sanction based on 12-month banking &amp; GST turnover</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Tenure ranging from 12 to 36 months</span>
              </li>
            </ul>
            <button
              onClick={() => onOpenApplyModal('loan_against_property', 'Unsecured Business Loan Inquiry')}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-colors"
            >
              Check Business Eligibility
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-serif font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-slate-900' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// 2. PERSONAL LOAN PAGE (/personal-loan)
// ==========================================
interface PersonalLoanPageProps {
  onOpenApplyModal: () => void;
  onNavigate: (path: string) => void;
}

export const PersonalLoanPage: React.FC<PersonalLoanPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Personal Loan Bangalore</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <User className="w-3.5 h-3.5 text-emerald-600" />
            <span>Salaried &amp; Professional Personal Credit</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Personal Loan Guidance &amp; Alternatives in Bangalore
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Quick liquidity for urgent medical, education, or wedding milestones. Understand borrowing costs and explore when a low-interest secured mortgage loan offers superior savings.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-bold font-serif text-slate-900">Comparing Personal Loan vs Property Mortgage</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            While personal loans are approved rapidly without collateral, their interest rates typically range from 10.5% to 16% p.a. with tenures capped at 5 years. If you own property in Bangalore, opting for a Loan Against Property (LAP) or top-up loan can reduce interest payments significantly over longer horizons.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900">Personal Loan</span>
              <p className="text-slate-600">Higher ROI (10.5%–16%), max 5 years tenure, faster disbursal, no property title vetting.</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-950">Property Top-Up / LAP</span>
              <p className="text-slate-700">Lower ROI (starting ~8.40%–9.25%), up to 15–20 years tenure, smaller monthly EMI burden.</p>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenApplyModal}
              className="py-2.5 px-5 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-colors"
            >
              Consult an Advisor on Financing Options
            </button>
            <button
              onClick={() => onNavigate('/loan-emi-calculator')}
              className="py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors"
            >
              Calculate EMI Comparison
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// 3. LAP ELIGIBILITY PAGE (/lap-eligibility)
// ==========================================
interface LapEligibilityPageProps {
  onOpenApplyModal: () => void;
  onNavigate: (path: string) => void;
}

export const LapEligibilityPage: React.FC<LapEligibilityPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/loan-against-property')} className="hover:text-slate-900 transition-colors">
            Loan Against Property
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Eligibility Criteria</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Percent className="w-3.5 h-3.5 text-emerald-600" />
            <span>LTV &amp; Income Assessment Criteria</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Loan Against Property (LAP) Eligibility Criteria
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Detailed guide to Loan-to-Value (LTV) limits, property valuation norms, FOIR calculation, and financial surrogate appraisal for mortgage loans in Bangalore.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-xs text-slate-700 leading-relaxed">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-bold font-serif text-slate-900">Key Pillars of LAP Eligibility</h2>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm">1. Loan-to-Value (LTV) Norms</strong>
              <p className="text-slate-600 mt-1">
                Lenders generally sanction up to 65% to 75% of the market valuation for freehold residential properties, and up to 50% to 65% for commercial premises, industrial properties, or clinics.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm">2. Debt-to-Income / FOIR Assessment</strong>
              <p className="text-slate-600 mt-1">
                For salaried borrowers, permissible FOIR typically ranges from 50% to 65%. For business entities and MSMEs, credit underwriters analyze profit before depreciation (EBITDA), debt-service coverage ratio (DSCR), and banking turnover velocity.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm">3. Property Marketability &amp; Title Verification</strong>
              <p className="text-slate-600 mt-1">
                The pledged property must have a clear, marketable freehold title, continuous 30-year parent deed trail, Kaveri Form 15 non-encumbrance certificate, and municipal tax clearance (BBMP A-Khata, BDA, or verified approval).
              </p>
            </div>
          </div>
          <div className="pt-2">
            <button
              onClick={onOpenApplyModal}
              className="py-2.5 px-5 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-colors"
            >
              Request Property Valuation &amp; Eligibility Check
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// 4. LOAN EMI CALCULATOR PAGE (/loan-emi-calculator)
// ==========================================
interface LoanEmiCalculatorPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const LoanEmiCalculatorPage: React.FC<LoanEmiCalculatorPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  const emiResult = calculateEmi(loanAmount, interestRate, tenureYears);

  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Loan EMI Calculator</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Financial Planning &amp; Repayment Estimator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Comprehensive Loan EMI Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estimate your monthly installments, total interest outlays, and amortization breakdown for Home Loans, Property Loans, or Personal Financing.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Sliders Form */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                <label htmlFor="emi-calc-amount">Loan Amount</label>
                <span className="font-mono text-[#85673E]">{formatCurrencyINR(loanAmount)}</span>
              </div>
              <input
                id="emi-calc-amount"
                type="range"
                min={500000}
                max={50000000}
                step={250000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹5 Lakhs</span>
                <span>₹5 Crores</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                <label htmlFor="emi-calc-rate">Interest Rate (Annual %)</label>
                <span className="font-mono text-[#85673E]">{interestRate}% p.a.</span>
              </div>
              <input
                id="emi-calc-rate"
                type="range"
                min={7.5}
                max={15.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>7.5%</span>
                <span>15.0%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                <label htmlFor="emi-calc-tenure">Loan Tenure (Years)</label>
                <span className="font-mono text-[#85673E]">{tenureYears} Years</span>
              </div>
              <input
                id="emi-calc-tenure"
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] space-y-4 text-center">
            <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">Estimated Monthly EMI</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-800">
              {formatCurrencyINR(emiResult.monthlyEmi)}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#EAE4DC] text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-[#EAE4DC]">
                <span className="text-[10px] text-slate-400 block font-semibold">Total Interest</span>
                <span className="font-mono font-bold text-slate-900">{formatCurrencyINR(emiResult.totalInterest)}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#EAE4DC]">
                <span className="text-[10px] text-slate-400 block font-semibold">Total Payable</span>
                <span className="font-mono font-bold text-slate-900">{formatCurrencyINR(emiResult.totalPayment)}</span>
              </div>
            </div>
            <button
              onClick={() => onOpenApplyModal('home_loan', `Calculated for EMI: ${formatCurrencyINR(emiResult.monthlyEmi)}`)}
              className="w-full py-3 px-4 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-colors shadow-xs"
            >
              Apply With This EMI Estimate
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

// ==========================================
// 5. HOME LOAN INTEREST RATES PAGE (/home-loan/interest-rates)
// ==========================================
interface HomeLoanInterestRatesPageProps {
  onOpenApplyModal: () => void;
  onNavigate: (path: string) => void;
}

export const HomeLoanInterestRatesPage: React.FC<HomeLoanInterestRatesPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/home-loan')} className="hover:text-slate-900 transition-colors">
            Home Loan
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Interest Rates (2026)</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
            <span>Repo-Linked Lending Rates (RLLR) Benchmarks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Home Loan Interest Rates in Bangalore (2026 Guide)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Compare benchmark floating and fixed interest rates across top public banks, private lenders, and Housing Finance Companies (HFCs).
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="py-3 px-4">Lending Institution</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Home Loan Interest Rate</th>
                  <th className="py-3 px-4">Max Tenure</th>
                  <th className="py-3 px-4">Key Characteristic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PARTNER_BANKS.map((bank, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">{bank.name}</td>
                    <td className="py-3.5 px-4 text-slate-600">{bank.category}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">{bank.homeLoanRate}</td>
                    <td className="py-3.5 px-4 text-slate-700">{bank.maxTenure}</td>
                    <td className="py-3.5 px-4 text-slate-600">{bank.popularFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>Important Regulatory Disclosure:</strong> Interest rates are benchmark repo-linked, indicative, and subject to change based on RBI monetary policies, applicant credit underwriting (CIBIL score &gt;750), property valuation, and individual lender terms. Confirm current terms directly during credit appraisal.
        </div>
      </section>
    </div>
  );
};
