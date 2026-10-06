import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Percent,
  Clock,
  FileText,
  Building2,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Home,
  TrendingDown,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { BRAND_CONFIG, PARTNER_BANKS } from '../data/loanData';
import { buildWhatsAppLink } from '../utils/loanCalculators';

interface HomeLoanPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const HomeLoanPage: React.FC<HomeLoanPageProps> = ({
  onOpenApplyModal,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the current starting interest rate for home loans in Bangalore?',
      a: 'Home loan interest rates through our partner network start from benchmark rates (linked to the RBI repo rate). Rates depend on your CIBIL score (750+ preferred), employment profile (salaried IT/corporate vs self-employed), and property category.',
    },
    {
      q: 'Why should I work with an independent home loan consultant like Group ACH instead of going directly to a single bank?',
      a: 'When you apply to a single bank branch, you are limited to their rigid underwriting policies, singular interest rate structure, and conservative valuation. Group ACH is connected with 70+ public banks, private institutions, and housing finance companies (HFCs). We compare spreads across lenders, negotiate loan-to-value (LTV) limits, resolve property chain documentation issues, and provide free doorstep service in Bangalore.',
    },
    {
      q: 'What types of properties in Bangalore can be financed through Group ACH?',
      a: 'We facilitate financing for BBMP A-Khata, B-Khata, BDA allotted sites, DC converted residential plots, gated community villas, and society apartments across Bangalore (Jayanagar, Indiranagar, Whitefield, Electronic City, HSR Layout, Yelahanka, etc.).',
    },
    {
      q: 'What is the maximum loan tenure and loan-to-value (LTV) ratio available?',
      a: 'Borrowers can avail repayment tenures up to 30 years. As per RBI guidelines, LTV can go up to 90% for loans up to ₹30 Lakhs, up to 80% for loans between ₹30 Lakhs and ₹75 Lakhs, and up to 75% for high-ticket home purchases above ₹75 Lakhs.',
    },
    {
      q: 'Does Group ACH charge any upfront service fee from borrowers?',
      a: 'No. Group ACH does not charge any upfront advisory or processing charges to retail borrowers. Our institutional advisory is transparent and dedicated to securing you the lowest EMI.',
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
          <span className="font-semibold text-slate-900">Home Loan Advisory</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Authorized Advisory for 70+ Partner Banks & NBFCs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Home Loan Advisory & Lowest Interest Rates in Bangalore
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Looking for the right home loan? Group ACH helps you compare, negotiate, and secure the lowest home loan interest rates, maximum loan-to-value, and fastest sanction from 70+ leading Indian banks with doorstep documentation across Bangalore.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Home Loan Hub Inquiry')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <span>Check Home Loan Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={buildWhatsAppLink('Hello Group ACH, I want to compare Home Loan rates across 70+ banks for Bangalore.')}
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

      {/* Main Content Body: 1200+ Words Structured Content */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Percent className="w-5 h-5 text-[#85673E]" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Lowest Repo-Linked Spreads</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We analyze floating spread markups across public and private sector banks to ensure you secure the lowest possible EMI over your complete tenure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">70+ Institutional Lenders</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              One application connects you with SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Tata Capital, Bajaj Housing, and specialized housing finance companies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Express 3 to 7 Day Sanction</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated credit underwriters review your file beforehand, preventing document query hold-ups and expediting legal and technical verification.
            </p>
          </div>
        </div>

        {/* Section 1: Types of Home Loans We Assist With */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Comprehensive Home Loan Portfolios in Bangalore
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every home buyer’s profile and property requirement is distinct. As authorized loan advisors, Group ACH guides you through the full spectrum of residential real estate financing:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">1. Home Purchase Loan (Fresh & Resale)</h4>
              <p className="text-xs text-slate-600">
                Financing for purchasing ready-to-move apartments, under-construction builder flats, BBMP/BDA approved homes, or private society apartments in Bangalore.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">2. Plot Purchase + Construction Loan (Composite)</h4>
              <p className="text-xs text-slate-600">
                Combined financial sanction enabling you to acquire a residential freehold plot and construct your custom home with stage-wise disbursements.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">3. Home Loan Balance Transfer + Top-Up</h4>
              <p className="text-xs text-slate-600">
                Switch your existing high-rate home loan from another bank or NBFC to lower interest rates and obtain an additional low-interest top-up loan.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">4. Home Improvement & Extension Loans</h4>
              <p className="text-xs text-slate-600">
                Capital to renovate, add additional floors, or upgrade interiors of your existing home with tax advantages under Section 24b.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Eligibility & Document Checklist Overview */}
        <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EAE4DC] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Key Home Loan Eligibility Benchmarks
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Lenders assess your income, fixed obligation ratio (FOIR), and credit health.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/home-loan-eligibility')}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Detailed Eligibility Guide →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Age Criteria</span>
              <p className="text-slate-600">21 to 65 years (Salaried) / up to 70 years (Self-employed at maturity).</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">CIBIL Score</span>
              <p className="text-slate-600">750+ qualifies for prime benchmark rates and expedited processing.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">FOIR Ratio</span>
              <p className="text-slate-600">Up to 50%–65% of net monthly income can be allocated towards total EMIs.</p>
            </div>
          </div>

          {/* Contextual Internal Links */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-500 font-medium">Explore related guides:</span>
            <button
              onClick={() => onNavigate('/home-loan-documents')}
              className="text-[#85673E] hover:underline font-semibold"
            >
              Required Documents Checklist
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/home-loan-balance-transfer')}
              className="text-[#85673E] hover:underline font-semibold"
            >
              Balance Transfer Savings
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/home-loan-bengaluru')}
              className="text-[#85673E] hover:underline font-semibold"
            >
              Bangalore Property Guidelines
            </button>
          </div>
        </div>

        {/* Section 3: 70+ Bank Network Table Preview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Compare Top Institutional Lenders
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We partner with premier public, private, and housing finance institutions to negotiate personalized loan terms for your specific profile:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px]">
                  <th className="py-3 px-4">Lender</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Indicative Home Loan Rate</th>
                  <th className="py-3 px-4">Max Tenure</th>
                  <th className="py-3 px-4">Known For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PARTNER_BANKS.slice(0, 6).map((bank, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-4 font-bold text-slate-900">{bank.name}</td>
                    <td className="py-2.5 px-4 text-slate-500">{bank.category}</td>
                    <td className="py-2.5 px-4 font-mono font-semibold text-emerald-700">{bank.homeLoanRate}</td>
                    <td className="py-2.5 px-4 text-slate-600">{bank.maxTenure}</td>
                    <td className="py-2.5 px-4 text-slate-500">{bank.popularFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Frequently Asked Questions (FAQ Accordion with Schema Support) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#85673E]" />
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Frequently Asked Questions About Home Loans in Bangalore
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

        {/* CTA Bottom Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-white">
            Ready to Find the Best Home Loan in Bangalore?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with an experienced Group ACH home loan advisor. We evaluate your profile, compare 70+ bank rates, and manage your complete application with doorstep service.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Home Loan Bottom Banner')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-all shadow-md"
            >
              Get Free Loan Assessment
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
