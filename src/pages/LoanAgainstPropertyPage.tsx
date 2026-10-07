import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Building,
  Coins,
  FileCheck2,
  Clock,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Home,
  Phone,
  MessageSquare,
  Landmark,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/loanCalculators';

interface LoanAgainstPropertyPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const LoanAgainstPropertyPage: React.FC<LoanAgainstPropertyPageProps> = ({
  onOpenApplyModal,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is a Loan Against Property (LAP) and how does it work?',
      a: 'A Loan Against Property (LAP) is a secured mortgage loan where you pledge your self-occupied, vacant, or rented residential, commercial, or industrial real estate to a bank or NBFC in exchange for high-ticket capital. The title deed is placed in mortgage custody while you retain full ownership and operational possession of the property.',
    },
    {
      q: 'What is the maximum loan amount and Loan-to-Value (LTV) for LAP in Bangalore?',
      a: 'LTV typically ranges from 50% to 75% of the current fair market valuation of your property as assessed by independent government-approved bank empanelled valuers. Loan amounts range from ₹25 Lakhs up to ₹50+ Crores for prime commercial and residential properties.',
    },
    {
      q: 'Can I use a Loan Against Property for business expansion or working capital?',
      a: 'Yes. Unlike a standard home purchase loan which is strictly restricted to residential acquisition, LAP offers complete end-use flexibility. Funds can be deployed for business working capital, machinery acquisition, debt consolidation, overseas education, or marriage expenses.',
    },
    {
      q: 'What property types in Bangalore are eligible for Loan Against Property?',
      a: 'Eligible properties include approved residential apartments, BBMP A-Khata/B-Khata independent houses, commercial office spaces, retail shops with sanctioned building plans, approved industrial sheds, and clear title freehold plots across Bangalore (Jayanagar, Indiranagar, Whitefield, Electronic City, Peenya, etc.).',
    },
    {
      q: 'How does the interest rate of LAP compare to unsecured Business Loans or Personal Loans?',
      a: 'Because LAP is backed by tangible real estate collateral, its interest rates are substantially lower (often 9.25% to 11.5%) compared to unsecured business loans (15% to 22%) or personal loans (12% to 18%). Furthermore, LAP offers repayment tenures up to 15–20 years, dramatically reducing monthly EMI burden.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-slate-900 flex items-center gap-1 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Loan Against Property (LAP)</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Unlocking Real Estate Equity with Leading Institutional Lenders</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Loan Against Property (LAP) - Unlock Equity From Your Real Estate
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Need high-ticket liquidity for business expansion or financial restructuring? Pledge your residential, commercial, or industrial property in Bangalore to secure low interest rates, high LTV, and up to 20-year flexible tenures.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenApplyModal('loan_against_property', 'LAP Page Hero CTA')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <span>Check LAP Eligibility & LTV</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={buildWhatsAppLink('Hello Group ACH, I want to discuss a Loan Against Property in Bangalore.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Secured Line Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Coins className="w-5 h-5 text-[#85673E]" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Up to 75% Market LTV</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maximize your borrowing limit based on realistic market valuations for residential freehold houses, builder floors, and prime commercial units.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Extended 15 to 20 Year Tenure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike short-term unsecured loans that drain business cash flow, LAP tenures keep monthly installments manageable and tax-deductible when deployed for business.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
              <FileCheck2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Complex Title Structuring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our legal panel resolves chain of title discrepancies, GPA clearances, ancestral property partitions, and leasehold-to-freehold regularizations.
            </p>
          </div>
        </div>

        {/* Section 1: Eligible Property Collateral Types */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Acceptable Collateral Categories for LAP in Bangalore
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Group ACH works with institutional lenders with varied risk appetites, enabling us to finance properties that standard single-branch banks often reject:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Home className="w-4 h-4 text-[#85673E]" />
                <span>Residential Assets</span>
              </div>
              <p className="text-xs text-slate-600">
                Self-occupied or rented residential houses, BBMP A-Khata/B-Khata properties, group housing flats, BDA allotments, and approved gated villas in Bangalore.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Building className="w-4 h-4 text-emerald-600" />
                <span>Commercial Assets</span>
              </div>
              <p className="text-xs text-slate-600">
                Commercial retail shops, office units in commercial towers, SCO plots, institutional spaces, and warehouse godowns with valid permissions.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Landmark className="w-4 h-4 text-blue-600" />
                <span>Industrial Assets</span>
              </div>
              <p className="text-xs text-slate-600">
                Approved industrial plots and factory sheds in designated industrial zones (Peenya Industrial Area, Electronic City, Bommasandra, Bidadi Industrial Area, Whitefield EPIP Zone).
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Comparison: LAP vs Unsecured Business Loan */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Loan Against Property vs Unsecured Business Loan Comparison
          </h2>
          <p className="text-xs text-slate-600">
            Compare the key financial parameters before committing your business cash flows to short-term unsecured debt:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Loan Feature</th>
                  <th className="py-2.5 px-3 text-[#85673E]">Loan Against Property (LAP)</th>
                  <th className="py-2.5 px-3 text-slate-500">Unsecured Business Loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Indicative Interest Rate</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">9.25% to 11.50% p.a.</td>
                  <td className="py-2.5 px-3 text-rose-600 font-medium">15.00% to 22.00% p.a.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Maximum Tenure</td>
                  <td className="py-2.5 px-3 text-slate-800 font-medium">Up to 15 – 20 Years</td>
                  <td className="py-2.5 px-3 text-slate-600">1 to 5 Years</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Monthly EMI Impact</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-medium">Very Low (Long repayment horizon)</td>
                  <td className="py-2.5 px-3 text-rose-600 font-medium">Heavy (High monthly cash strain)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Maximum Loan Quantum</td>
                  <td className="py-2.5 px-3 text-slate-800 font-medium">Up to ₹50+ Crores (LTV linked)</td>
                  <td className="py-2.5 px-3 text-slate-600">Capped at ₹50 Lakhs – ₹1 Crore</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Tax Treatment</td>
                  <td className="py-2.5 px-3 text-slate-800">Interest deductible under Sec 37(1) for business</td>
                  <td className="py-2.5 px-3 text-slate-800">Interest deductible under Sec 37(1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Step-by-Step LAP Sanction Journey */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            The 4-Step Group ACH Property Loan Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">1</span>
              <h4 className="font-bold text-slate-900">Title & Eligibility Audit</h4>
              <p className="text-slate-600">Preliminary vetting of chain deeds, sanctioned plans, and borrower ITR/banking.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">2</span>
              <h4 className="font-bold text-slate-900">Technical Valuation</h4>
              <p className="text-slate-600">Empanelled structural engineers inspect site to arrive at fair market valuation.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">3</span>
              <h4 className="font-bold text-slate-900">Legal Search Report</h4>
              <p className="text-slate-600">30-year non-encumbrance search conducted at the sub-registrar office.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">4</span>
              <h4 className="font-bold text-slate-900">Sanction & Disbursement</h4>
              <p className="text-slate-600">Final sanction letter issued, MODT executed, and funds disbursed to bank account.</p>
            </div>
          </div>
        </div>

        {/* Section 4: FAQs */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#85673E]" />
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Loan Against Property FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
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

        {/* Contextual Internal Links Footer */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-slate-700">Explore Related Portfolios:</span>
          <button onClick={() => onNavigate('/home-loan')} className="text-[#85673E] hover:underline font-semibold">
            Home Loan Rates & Advisory
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-bengaluru')} className="text-[#85673E] hover:underline font-semibold">
            Bangalore Real Estate Guidelines
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-documents')} className="text-[#85673E] hover:underline font-semibold">
            Property Documents Checklist
          </button>
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-white">
            Unlock High-Ticket Capital From Your Real Estate Today
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get an instant property valuation assessment and discover how much you can borrow against your residential or commercial asset with Group ACH.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('loan_against_property', 'LAP Bottom CTA')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-all shadow-md"
            >
              Evaluate My Property Eligibility
            </button>
            <a
              href="tel:+919482537337"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call: +91 94825 37337</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};
