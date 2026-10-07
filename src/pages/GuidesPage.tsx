import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  RefreshCw,
  Briefcase,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Home,
  Download,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Building,
} from 'lucide-react';
import { buildWhatsAppLink, formatCurrencyINR } from '../utils/loanCalculators';

export type GuideType =
  | 'eligibility'
  | 'documents'
  | 'balance_transfer'
  | 'salaried'
  | 'self_employed';

interface GuidesPageProps {
  type: GuideType;
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({
  type,
  onOpenApplyModal,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Content configurations based on guide type
  const configMap: Record<
    GuideType,
    {
      badge: string;
      h1: string;
      description: string;
      faqs: { q: string; a: string }[];
    }
  > = {
    eligibility: {
      badge: 'Home Loan Eligibility & Maximum Borrowing Capacity',
      h1: 'Home Loan Eligibility Criteria: Calculate Maximum Borrowing Power',
      description:
        'Understand how banks evaluate your Fixed Obligation to Income Ratio (FOIR), CIBIL credit score, Net Monthly Income, and co-applicant eligibility to arrive at your maximum sanction limit.',
      faqs: [
        {
          q: 'What is FOIR and how does it determine my home loan limit?',
          a: 'Fixed Obligation to Income Ratio (FOIR) represents the percentage of your net monthly take-home salary already committed to paying EMIs and debts. Most banks allow a FOIR of 50% to 65%. For example, if you earn ₹1,00,000 per month and have an existing car EMI of ₹15,000, your available monthly EMI capacity for a home loan is up to ₹35,000 to ₹50,000.',
        },
        {
          q: 'How can adding a co-applicant increase home loan eligibility?',
          a: 'Adding an earning spouse, parent, or sibling combines their net monthly income with yours, boosting total household borrowing power and unlocking higher ticket loan amounts, while providing joint tax benefits under Section 80C and Section 24b.',
        },
        {
          q: 'What minimum CIBIL score is required for prime interest rates?',
          a: 'A credit score of 750 or higher qualifies you for the lowest benchmark interest rates, minimal processing fees, and expedited credit underwriting.',
        },
      ],
    },
    documents: {
      badge: 'Comprehensive Checklist for 2026',
      h1: 'Complete Home Loan Documents Required Checklist',
      description:
        'Prevent processing delays and credit queries. Review the exhaustive list of KYC, income verification proofs, and legal property chain papers required by top banks in India.',
      faqs: [
        {
          q: 'What documents are required for salaried individuals?',
          a: 'Last 3 months salary slips, 6 months bank statement showing salary credits, Form 16 for the last 2 years, PAN Card, Aadhaar Card, and employer ID card.',
        },
        {
          q: 'What documents do self-employed business owners need to submit?',
          a: 'Last 3 years Income Tax Returns (ITR) with complete computation of income, balance sheet & profit & loss account certified by a CA, last 12 months bank statements, GST registration & returns, and business vintage proof (MSME certificate or Gumasta).',
        },
        {
          q: 'What property documents are required for legal vetting?',
          a: 'Original chain of title deeds (minimum 30 years or complete chain since allotment), allotment letter, approved building sanction plan, occupancy certificate (OC), property tax receipts, and non-encumbrance certificate.',
        },
      ],
    },
    balance_transfer: {
      badge: 'Interest Rate Reduction & Debt Restructuring',
      h1: 'Home Loan Balance Transfer Assistance & Interest Savings',
      description:
        'Paying an outdated high interest rate on your ongoing home loan? Switch your loan to a top-tier bank with lower spreads, reduce your monthly EMI, and unlock low-cost top-up financing.',
      faqs: [
        {
          q: 'How much interest can I save by transferring my home loan?',
          a: 'Even a 0.50% reduction on a ₹50 Lakh loan with 20 years remaining saves over ₹3.5 Lakhs to ₹5 Lakhs in total interest. Group ACH computes your exact break-even point taking into account foreclosure letters and registration fees.',
        },
        {
          q: 'Can I get a Top-Up loan along with my balance transfer?',
          a: 'Yes. Most lenders offer attractive top-up loans at home loan equivalent rates (substantially cheaper than personal loans) during a balance transfer, which can be used for business, renovation, or personal needs.',
        },
        {
          q: 'Does transferring my home loan require original deeds from my existing bank?',
          a: 'Your new bank issues a payout cheque directly to your existing lender. Upon clearing, your existing bank releases the original title deeds directly to the new bank within 15 to 30 days without any hassle.',
        },
      ],
    },
    salaried: {
      badge: 'Dedicated Portfolio for Salaried Executives',
      h1: 'Home Loan for Salaried Professionals in MNCs & Government',
      description:
        'Fast-track home loan solutions crafted for salaried executives, IT professionals, civil servants, and PSU officers with minimal documentation and customized repayment structures.',
      faqs: [
        {
          q: 'Do banks consider variable pay, bonuses, and allowances for loan eligibility?',
          a: 'Yes. Most top lenders calculate 50% to 100% of average annual performance bonuses and recurring allowances when calculating your net monthly eligibility.',
        },
        {
          q: 'How fast can a salaried home loan be sanctioned?',
          a: 'For salaried applicants working in Category-A MNCs or listed corporates, in-principle digital sanction can be achieved within 24 to 48 hours.',
        },
      ],
    },
    self_employed: {
      badge: 'Specialized Structuring for Entrepreneurs',
      h1: 'Home Loan Solutions for Self-Employed & Business Proprietors',
      description:
        'Structured mortgage solutions for business owners, traders, MSMEs, and freelance consultants. Avail surrogate programs based on banking turnover and GST without rigid salary slip requirements.',
      faqs: [
        {
          q: 'Can I get a home loan if my reported ITR is low compared to actual cash flow?',
          a: 'Yes. Several of our partner institutions offer Banking Surrogate, GST Turnover, and Liquid Income Assessment schemes that evaluate actual bank account deposits and business margins rather than reported net profit alone.',
        },
        {
          q: 'What is the maximum loan tenure for self-employed applicants?',
          a: 'Self-employed individuals can avail repayment tenures up to 20 to 25 years, up to the age of 65 to 70 years at loan maturity.',
        },
      ],
    },
  };

  const current = configMap[type] || configMap.eligibility;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
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
          <span className="font-semibold text-slate-900">{current.badge}</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{current.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {current.h1}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {current.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenApplyModal('home_loan', `Guide CTA: ${current.h1}`)}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <span>Get Personalized Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold shadow-xs transition-all"
            >
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        {/* Specific Guide Deep-Dive Content */}
        {type === 'eligibility' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              How Banks Calculate Your Maximum Home Loan Limit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">1. Multiplier Method (Salary Based)</h4>
                <p className="leading-relaxed">
                  Most Indian lenders sanction approximately <strong>55 to 60 times</strong> your net monthly salary for a 20-year loan tenure. If your net monthly salary is ₹1,00,000 with zero debts, your indicative loan eligibility is roughly ₹55 to ₹60 Lakhs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">2. FOIR Method (Debt to Income)</h4>
                <p className="leading-relaxed">
                  Lenders ensure your total monthly EMI burden does not exceed 50% to 65% of your net income. Any active personal loans, credit card balances, or auto loans will reduce your net borrowing headroom.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800">Want to test your exact monthly EMI and eligibility numbers?</span>
              <button
                onClick={() => onNavigate('/')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shrink-0"
              >
                Use Live EMI Calculator
              </button>
            </div>
          </div>
        )}

        {type === 'documents' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Checklist of Essential Home Loan Documentation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">1. Identity & KYC</h3>
                <ul className="space-y-1.5 text-slate-600 list-disc pl-4">
                  <li>PAN Card (Mandatory)</li>
                  <li>Aadhaar Card (UIDAI verified)</li>
                  <li>Passport / Voter ID / Driving License</li>
                  <li>3 Passport-sized photographs</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">2. Income Credentials</h3>
                <ul className="space-y-1.5 text-slate-600 list-disc pl-4">
                  <li>Last 3 months salary slips</li>
                  <li>Last 6 months salary bank account statement</li>
                  <li>Form 16 & ITR for past 2 financial years</li>
                  <li>Bonus and incentive statements if applicable</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">3. Property Papers</h3>
                <ul className="space-y-1.5 text-slate-600 list-disc pl-4">
                  <li>Agreement to Sale / Allotment Letter</li>
                  <li>Previous Title Chain (minimum 30 years)</li>
                  <li>Sanctioned Building Plan & OC</li>
                  <li>Property Tax Paid Receipts</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {type === 'balance_transfer' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              When Does a Home Loan Balance Transfer Make Financial Sense?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              If your current lender has not passed on benchmark rate reductions, or if you took your home loan 2–5 years ago when your credit score was lower, switching banks can significantly lower your interest outlay:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Rate Gap &gt; 0.40%</span>
                <p className="text-slate-600">If another bank offers a spread at least 40–50 bps lower than your present rate.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Tenure Remaining &gt; 5 Yrs</span>
                <p className="text-slate-600">Interest is front-loaded; balance transfer maximizes savings during the first 10-15 years.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Need Extra Capital</span>
                <p className="text-slate-600">Avail an instant low-rate top-up loan at home loan interest rates for business or personal use.</p>
              </div>
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#85673E]" />
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {current.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === index ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links Navigation Bar */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-slate-700">Explore Other Guides:</span>
          <button onClick={() => onNavigate('/home-loan-eligibility')} className="text-[#85673E] hover:underline font-semibold">
            Eligibility Guide
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-documents')} className="text-[#85673E] hover:underline font-semibold">
            Documents Checklist
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-balance-transfer')} className="text-[#85673E] hover:underline font-semibold">
            Balance Transfer
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-for-salaried')} className="text-[#85673E] hover:underline font-semibold">
            Salaried Loans
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-for-self-employed')} className="text-[#85673E] hover:underline font-semibold">
            Self-Employed Loans
          </button>
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-white">
            Have Questions About Your Loan Profile?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our certified loan advisors evaluate your specific income documents, resolve credit bottlenecks, and coordinate with partner banks and NBFCs for structured evaluation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Guides Page Bottom')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-all shadow-md"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
            >
              Contact Group ACH
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
